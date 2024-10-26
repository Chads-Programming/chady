import { calculateChallengeScore } from '@/challenges/helpers/challenge-score';
import { difficultMapToFactor } from '@/challenges/mappings/difficult-factor.mapped';
import { PrismaService } from '@/database/prisma.service';
import { CodeExecutionContext } from '@/runner/strategies/execution.context';
import { JavascriptExecutionStrategy } from '@/runner/strategies/javascript.strategy';
import { PythonExecutionStrategy } from '@/runner/strategies/python.strategy';
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ProgrammingLang, SubmissionStatus, TestCase } from '@prisma/client';
import { SearchUserSubmissionArgs } from '../dtos/search-user-submission.args';
import { SubmissionInput } from '../dtos/submission.input';
import { InputExecutionResult } from '../models/input-execution-result.model';
import { SubmissionResult } from '../models/submission-result.model';
import { TestCaseModel } from '../models/test-case.model';
import { ChallengeService } from './challenge.service';

@Injectable()
export class SubmissionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly javascriptStrategy: JavascriptExecutionStrategy,
    private readonly pythonStrategy: PythonExecutionStrategy,
    private readonly challengeService: ChallengeService,
  ) {}

  async findUserSubmission({
    userId,
    codeChallengeId,
    programmingLang,
  }: {
    userId: string;
  } & SearchUserSubmissionArgs) {
    return this.prisma.submission.findFirst({
      where: {
        codeChallengeId,
        lang: programmingLang,
        userId,
      },
    });
  }

  async findUserSubmissionById(id: string) {
    return this.prisma.submission.findFirst({
      where: {
        id,
      },
    });
  }

  async findUserSubmissions(userId: string) {
    return this.prisma.submission.findMany({
      where: {
        userId,
      },
    });
  }

  async findSubmissionCodeChallengeById(submissionId: string) {
    const submission = await this.prisma.submission.findFirst({
      where: { id: submissionId },
    });

    return this.prisma.codeChallenge.findFirst({
      where: {
        id: submission.codeChallengeId,
      },
    });
  }

  async createUserSubmission(
    userId: string,
    submission: SubmissionInput,
  ): Promise<SubmissionResult> {
    const { inputResults, runtime, status } =
      await this.executeSubmission(submission);
    const { difficult } = await this.challengeService.findCodeChallengeById(
      submission.challengeId,
    );

    const createdSubmission = await this.prisma.submission.create({
      data: {
        solutionCode: submission.solutionCode,
        codeChallengeId: submission.challengeId,
        lang: submission.lang,
        userId,
        runtime,
        status: SubmissionStatus.Pending,
        score: calculateChallengeScore(
          runtime,
          difficultMapToFactor(difficult),
        ),
      },
    });

    return {
      submission: {
        ...createdSubmission,
        runtime,
      },
      inputResults,
      status,
    };
  }

  private async checkSubmissionOwnership(
    userId: string,
    submissionId: string,
  ): Promise<boolean> {
    const submission = await this.prisma.submission.findFirst({
      where: { id: submissionId },
    });

    return submission.userId === userId;
  }

  async updateUserSubmission(
    submissionId: string,
    userId: string,
    submission: SubmissionInput,
  ): Promise<SubmissionResult> {
    const hasOwnership = await this.checkSubmissionOwnership(
      userId,
      submissionId,
    );

    if (!hasOwnership) {
      throw new ForbiddenException('User is not related to update submission');
    }

    const { difficult } = await this.challengeService.findCodeChallengeById(
      submission.challengeId,
    );

    const { inputResults, runtime, status } =
      await this.executeSubmission(submission);

    const updatedSubmission = await this.prisma.submission.update({
      where: {
        id: submissionId,
      },
      data: {
        solutionCode: submission.solutionCode,
        runtime,
        status,
        score: calculateChallengeScore(
          runtime,
          difficultMapToFactor(difficult),
        ),
      },
    });

    return {
      submission: {
        ...updatedSubmission,
        runtime,
      },
      inputResults,
      status,
    };
  }

  private async executeSubmission(submission: SubmissionInput) {
    const { lang, solutionCode, challengeId } = submission;

    const challengeLangDetail =
      await this.challengeService.findChallengeLangDetailByChallengeId(
        challengeId,
        lang,
      );

    if (!challengeLangDetail) {
      throw new NotFoundException(
        'Challenge was not configured for this lang: ',
        lang,
      );
    }

    const testCases = await this.challengeService.findTestCases(challengeId);
    const mappedTestCases = new Map(
      testCases.map((testCase) => [testCase.id, testCase]),
    );

    const executionContext = new CodeExecutionContext(this.javascriptStrategy);

    if (lang === ProgrammingLang.Python) {
      executionContext.setStrategy(this.pythonStrategy);
    }

    const executionResult = await executionContext.executeCode({
      inputs: testCases.map((testCase) => ({
        id: testCase.id.toString(),
        args: testCase.args,
      })),
      mainCodeArgs: {
        baseCode: challengeLangDetail.mainCode,
        solutionCode: solutionCode,
      },
    });

    const runtime = executionResult.results.reduce(
      (acc, { execution_time }) => acc + execution_time,
      0,
    );

    const hasPassed = executionResult.results.every((result) => {
      const testCase = mappedTestCases.get(Number(result.input.id));
      return result.output === testCase.expectedOutput;
    });

    const inputResults: InputExecutionResult[] = executionResult.results.map(
      ({ input, output, execution_time, time_format }) => {
        const testCase = mappedTestCases.get(Number(input.id));

        return {
          testCase: this.handleSecretTestCase(testCase),
          output,
          executionTime: execution_time,
          timeFormat: time_format,
          isSuccess: output === testCase.expectedOutput,
        };
      },
    );

    return {
      inputResults,
      runtime,
      status: hasPassed ? SubmissionStatus.Success : SubmissionStatus.Failed,
    };
  }

  private handleSecretTestCase(testCase: TestCase): TestCaseModel {
    if (testCase.isSecret) {
      return {
        ...testCase,
        args: '****',
        expectedOutput: '****',
      };
    }
    return {
      ...testCase,
      args: testCase.args,
    };
  }

  async submitUserSolution(
    userId: string,
    submission: SubmissionInput,
  ): Promise<SubmissionResult> {
    const currentSubmission = await this.prisma.submission.findFirst({
      where: {
        userId,
        codeChallengeId: submission.challengeId,
        lang: submission.lang,
      },
    });

    if (currentSubmission) {
      return this.updateUserSubmission(
        currentSubmission.id,
        userId,
        submission,
      );
    }

    return this.createUserSubmission(userId, submission);
  }
}
