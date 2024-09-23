import { UseGuards } from '@nestjs/common';
import { Context, Mutation, Resolver } from '@nestjs/graphql';
import { Response } from 'express';
import { User } from '../users/models/user.model';
import { AuthService } from './auth.service';
import { GqlCurrentUser } from './decorators/current-user';
import { GqlRefreshAuthGuard } from './guards/graphql-jwt-refresh.guard';
import { JwtModel } from './models/jwt.model';
import { JwtHelper } from './utils';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => JwtModel)
  @UseGuards(GqlRefreshAuthGuard)
  async refreshToken(
    @Context() context: { res: Response },
    @GqlCurrentUser() user: User,
  ): Promise<JwtModel> {
    const { res } = context;

    const { refreshToken, accessToken } =
      await this.authService.generateJwt(user);

    JwtHelper.saveJwtInCookie(res, { accessToken, refreshToken });

    return {
      refreshToken,
      accessToken,
    };
  }
}
