import { DatabaseModule } from '@/database/database.module';
import { DiscordModule } from '@/discord/discord.module';
import { Module } from '@nestjs/common';
import { UserResolver } from './resolvers/user.resolver';
import { UserService } from './services/user.service';

@Module({
  imports: [DatabaseModule, DiscordModule],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UsersModule {}
