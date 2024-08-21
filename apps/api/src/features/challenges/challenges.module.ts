import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { DatabaseModule } from '@/database/database.module';
import { ChallengeService } from './services/challenge.service';

@Module({
  imports: [AuthModule, DatabaseModule],
  providers: [ChallengeService],
  exports: [],
})
export class ChallengesModule {}
