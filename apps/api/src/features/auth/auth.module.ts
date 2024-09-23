import { envs } from '@/config';
import { DiscordModule } from '@/discord/discord.module';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JWT_ACCESS_SERVICE, JWT_REFRESH_SERVICE } from './consts';
import { DiscordStrategy } from './strategies/discord.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { RefreshJwtStrategy } from './strategies/refresh-jwt.strategy';

@Module({
  controllers: [AuthController],
  imports: [UsersModule, DiscordModule, PassportModule.register({})],
  providers: [
    AuthService,
    DiscordStrategy,
    JwtStrategy,
    RefreshJwtStrategy,
    AuthResolver,
    {
      provide: JWT_ACCESS_SERVICE,
      useFactory: (): JwtService => {
        return new JwtService({
          secret: envs.JWT_ACCESS_SECRET,
          signOptions: {
            expiresIn: envs.JWT_ACCESS_EXPIRATION,
          },
        });
      },
    },
    {
      provide: JWT_REFRESH_SERVICE,
      useFactory: (): JwtService => {
        return new JwtService({
          secret: envs.JWT_REFRESH_SECRET,
          signOptions: {
            expiresIn: envs.JWT_REFRESH_EXPIRATION,
          },
        });
      },
    },
  ],
  exports: [AuthService, JwtStrategy, RefreshJwtStrategy],
})
export class AuthModule {}
