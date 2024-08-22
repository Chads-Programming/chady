import { PrismaService } from '@/database/prisma.service';
import { ForbiddenException, Injectable } from '@nestjs/common';
import {
  CreateSubmissionInput,
  UpdateSubmissionInput,
} from '../dtos/submission.input';
import { SubmissionStatus } from '@prisma/client';

@Injectable()
export class SubmissionService {
  constructor(private readonly prisma: PrismaService) {}

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
    return this.prisma.submission.create({
      data: {
        solutionCode: submission.solutionCode,
        codeChallengeId: submission.challengeId,
        userId,
        // TODO: execute code
        runtime: 0,
        status: SubmissionStatus.Pending,
      },
    });
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

    return this.prisma.submission.update({
      where: {
        id: submissionId,
      },
      data: {
        solutionCode: submission.solutionCode,
        // TODO: execute code
        runtime: 0,
        status: SubmissionStatus.Pending,
      },
    });
  }
}
