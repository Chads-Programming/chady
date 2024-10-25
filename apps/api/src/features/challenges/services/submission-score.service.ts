import { PrismaService } from '@/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { UserScoreModel } from '../models/user-score.model';

@Injectable()
export class SubmissionScoreService {
  constructor(private readonly prisma: PrismaService) {}

  async findSubmissionsLeaderboard(): Promise<Omit<UserScoreModel, 'user'>[]> {
    const rawScores = await this.prisma.submission.groupBy({
      by: ['userId'],
      _sum: {
        score: true,
      },
      orderBy: {
        _sum: {
          score: 'asc',
        },
      },
      take: 10,
    });

    return rawScores.map((userScore) => ({
      userId: userScore.userId,
      totalScore: userScore._sum.score,
    }));
  }

  async findUserTotalScore(userId: string) {
    const rawScore = await this.prisma.submission.groupBy({
      by: ['userId'],
      _sum: {
        score: true,
      },
      where: {
        userId,
      },
    });

    const userScore = rawScore.pop();

    return userScore._sum;
  }
}
