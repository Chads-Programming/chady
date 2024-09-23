import { DatabaseModule } from '@/database/database.module';
import { RunnerModule } from '@/runner/runner.module';
import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { CodeChallengeResolver } from './resolvers/code-challenge.resolver';
import { SubmissionResolver } from './resolvers/submission.resolver';
import { ChallengeService } from './services/challenge.service';
import { SubmissionService } from './services/submission.service';

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
