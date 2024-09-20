import { ClsModule } from 'nestjs-cls';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { DiscordStrategy } from './strategies/discord.strategy';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { DiscordModule } from '@/discord/discord.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { envs } from '@/config';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { RefreshJwtStrategy } from './strategies/refresh-jwt.strategy';
import { AuthResolver } from './auth.resolver';
import { JWT_ACCESS_SERVICE, JWT_REFRESH_SERVICE } from './consts';

@Module({
  controllers: [AuthController],
  imports: [ClsModule, UsersModule, DiscordModule, PassportModule.register({})],
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
