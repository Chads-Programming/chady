import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { DatabaseModule } from '@/database/database.module';
import { ChallengeService } from './services/challenge.service';
import { SubmissionService } from './services/submission.service';
import { CodeChallengeResolver } from './resolvers/code-challenge.resolver';
import { SubmissionResolver } from './resolvers/submission.resolver';
import { RunnerModule } from '@/runner/runner.module';

@Module({
  imports: [AuthModule, DatabaseModule, RunnerModule],
  providers: [
    ChallengeService,
    SubmissionService,
    CodeChallengeResolver,
    SubmissionResolver,
  ],
  exports: [ChallengeService],
})
export class ChallengesModule {}
