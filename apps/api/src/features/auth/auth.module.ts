import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { DiscordStrategy } from './strategies/discord';
import { AuthController } from './auth.controller';
import { SessionSerializer } from './serializers/session.serializer';
import { UsersModule } from '../users/users.module';
import { DiscordModule } from '@/discord/discord.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [AuthController],
  imports: [
    UsersModule,
    DiscordModule,
    PassportModule.register({ session: true }),
  ],
  providers: [AuthService, DiscordStrategy, SessionSerializer],
  exports: [AuthService],
})
export class AuthModule {}
