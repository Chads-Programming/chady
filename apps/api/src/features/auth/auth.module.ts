import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { DiscordStrategy } from './strategies/discord';
import { AuthController } from './auth.controller';
import { SessionSerializer } from './serializers/session.serializer';
import { UsersModule } from '../users/users.module';
import { DiscordModule } from '@/discord/discord.module';

@Module({
  controllers: [AuthController],
  imports: [PassportModule, UsersModule, DiscordModule],
  providers: [AuthService, DiscordStrategy, SessionSerializer],
  exports: [AuthService],
})
export class AuthModule {}
