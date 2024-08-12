import { DatabaseModule } from '@/database/database.module';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { DiscordStrategy } from './strategies/discord';
import { AuthController } from './auth.controller';
import { SessionSerializer } from './serializers/session.serializer';

@Module({
  controllers: [AuthController],
  imports: [DatabaseModule, PassportModule],
  providers: [AuthService, DiscordStrategy, SessionSerializer],
  exports: [AuthService],
})
export class AuthModule {}
