import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { DatabaseModule } from '@/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [UserService],
  exports: [UserService],
})
export class UsersModule {}
