import { AuthModule } from '@/auth/auth.module';
import { SubmissionScoreResolver } from '@/challenges/resolvers/submission-score.resolver';
import { SubmissionScoreService } from '@/challenges/services/submission-score.service';
import { DatabaseModule } from '@/database/database.module';
import { RunnerModule } from '@/runner/runner.module';
import { UsersModule } from '@/users/users.module';
import { Module } from '@nestjs/common';
import { CodeChallengeResolver } from './resolvers/code-challenge.resolver';
import { SubmissionResolver } from './resolvers/submission.resolver';
import { ChallengeService } from './services/challenge.service';
import { SubmissionService } from './services/submission.service';

@Module({
  imports: [AuthModule, DatabaseModule, RunnerModule, UsersModule],
  providers: [
    ChallengeService,
    SubmissionService,
    SubmissionScoreService,
    CodeChallengeResolver,
    SubmissionResolver,
    SubmissionScoreResolver,
  ],
  exports: [ChallengeService],
})
export class ChallengesModule {}
