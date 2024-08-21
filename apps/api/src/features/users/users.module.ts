import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { DatabaseModule } from '@/database/database.module';
import { UserResolver } from './resolvers/user.resolver';
import { DiscordModule } from '@/discord/discord.module';

@Module({
  imports: [DatabaseModule, DiscordModule],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UsersModule {}
