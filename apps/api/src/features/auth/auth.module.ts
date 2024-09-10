import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { DiscordStrategy } from './strategies/discord';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { DiscordModule } from '@/discord/discord.module';
import { JwtModule } from '@nestjs/jwt';
import { envs } from '@/config';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { RefreshJwtStrategy } from './strategies/refresh-jwt.strategy';
import { AuthResolver } from './auth.resolver';

@Module({
  controllers: [AuthController],
  imports: [
    UsersModule,
    DiscordModule,
    PassportModule.register({}),
    JwtModule.register({
      secret: envs.JWT_SECRET,
      signOptions: { expiresIn: envs.JWT_EXPIRATION },
    }),
  ],
  providers: [
    AuthService,
    DiscordStrategy,
    JwtStrategy,
    RefreshJwtStrategy,
    AuthResolver,
  ],
  exports: [AuthService, JwtStrategy, RefreshJwtStrategy],
})
export class AuthModule {}
