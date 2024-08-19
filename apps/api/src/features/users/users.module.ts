import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { DatabaseModule } from '@/database/database.module';
import { UserResolver } from './resolvers/user.resolver';

@Module({
  imports: [DatabaseModule],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UsersModule {}
