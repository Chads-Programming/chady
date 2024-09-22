import { Controller, Get, Query, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { DiscordAuthGuard } from '@/auth/guards/discord-auth.guard';
import { envs } from '@/config';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user';
import { User } from '@prisma/client';
import { JwtHelper } from './utils';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('discord/login')
  @UseGuards(DiscordAuthGuard)
  login() {
    return;
  }

  @Get('discord/redirect')
  @UseGuards(DiscordAuthGuard)
  async redirect(
    @Query('state') redirectUrlFromState: string,
    @CurrentUser() user: User,
    @Res() res: Response,
  ) {
    const { accessToken, refreshToken } =
      await this.authService.generateJwt(user);

    JwtHelper.saveJwtInCookie(res, { accessToken, refreshToken });

    const redirectUrl = redirectUrlFromState ?? envs.AUTH_REDIRECT_URL;

    return res.redirect(redirectUrl);
  }

  @Get('logout')
  async logout(@Res() res: Response) {
    JwtHelper.clearJwtCookies(res);

    return res.redirect(envs.AUTH_REDIRECT_URL);
  }
}
