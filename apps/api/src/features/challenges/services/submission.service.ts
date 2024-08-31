import { JavascriptExecutionStrategy } from './../../../runner/strategies/javascript.strategy';
import { PrismaService } from '@/database/prisma.service';
import { ForbiddenException, Injectable } from '@nestjs/common';
import {
  CreateSubmissionInput,
  UpdateSubmissionInput,
} from '../dtos/submission.input';
import { ProgrammingLang, SubmissionStatus, TestCase } from '@prisma/client';
import { CodeExecutionContext } from '@/runner/strategies/execution.context';
import { ChallengeService } from './challenge.service';

@Injectable()
export class SubmissionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly javascriptStrategy: JavascriptExecutionStrategy,
    private readonly challengeService: ChallengeService,
  ) {}

  async findUserSubmissionById(userId: string, submissionId: string) {
    return this.prisma.submission.findFirst({
      where: {
        id: submissionId,
        userId,
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
    submission: CreateSubmissionInput,
  ) {
    const { inputResults, runtime } = await this.executeSubmission(
      submission.challengeId,
      submission.solutionCode,
    );

    const createdSubmission = await this.prisma.submission.create({
      data: {
        solutionCode: submission.solutionCode,
        codeChallengeId: submission.challengeId,
        userId,
        runtime,
        status: SubmissionStatus.Pending,
      },
    });

    return {
      submission: createdSubmission,
      inputResults,
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
    submission: UpdateSubmissionInput,
  ) {
    const hasOwnership = await this.checkSubmissionOwnership(
      userId,
      submissionId,
    );

    if (!hasOwnership) {
      throw new ForbiddenException('User is not related to update submission');
    }

    const userSubmission = await this.findUserSubmissionById(
      userId,
      submissionId,
    );

    const { inputResults, runtime } = await this.executeSubmission(
      userSubmission.codeChallengeId,
      submission.solutionCode,
    );

    const updatedSubmission = await this.prisma.submission.update({
      where: {
        id: submissionId,
      },
      data: {
        solutionCode: submission.solutionCode,
        runtime,
        status: SubmissionStatus.Pending,
      },
    });

    return {
      submission: updatedSubmission,
      inputResults,
    };
  }

  private async executeSubmission(challengeId: string, solutionCode: string) {
    const challenge =
      await this.challengeService.findCodeChallengeById(challengeId);

    const testCases = await this.challengeService.findTestCases(challengeId);
    const mappedTestCases = new Map(
      testCases.map((testCase) => [testCase.id, testCase]),
    );

    const executionContext = new CodeExecutionContext(this.javascriptStrategy);

    if (challenge.lang === ProgrammingLang.Javascript) {
      executionContext.setStrategy(this.javascriptStrategy);
    }

    const executionResult = await executionContext.executeCode({
      inputs: testCases.map((testCase) => ({
        id: testCase.id.toString(),
        args: JSON.stringify(testCase.args),
      })),
      mainCodeArgs: {
        baseCode: challenge.mainCode,
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

    const inputResults = executionResult.results.map(
      ({ input, output, execution_time, time_format }) => {
        const testCase = mappedTestCases.get(Number(input.id));

        return {
          testCase: this.handleSecretTestCase(testCase),
          output,
          executionTime: execution_time,
          timeFormat: time_format,
        };
      },
    );

    return {
      inputResults,
      runtime,
      status: hasPassed ? SubmissionStatus.Success : SubmissionStatus.Failed,
    };
  }

  private handleSecretTestCase(testCase: TestCase) {
    if (testCase.isSecret) {
      return {
        ...testCase,
        id: 'secret',
        args: '****',
      };
    }
    return testCase;
  }
}
