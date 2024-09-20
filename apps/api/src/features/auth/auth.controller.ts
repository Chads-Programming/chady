import { Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { DiscordAuthGuard } from '@/auth/guards/discord-auth.guard';
import { envs } from '@/config';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user';
import { User } from '@prisma/client';
import { JwtHelper } from './utils';
import { ClsService } from 'nestjs-cls';
import { AuthStore } from './types';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly cls: ClsService<AuthStore>,
  ) {}

  @Get('discord/login')
  @UseGuards(DiscordAuthGuard)
  login() {
    return;
  }

  @Get('discord/redirect')
  @UseGuards(DiscordAuthGuard)
  async redirect(@CurrentUser() user: User, @Res() res: Response) {
    const { accessToken, refreshToken } =
      await this.authService.generateJwt(user);

    JwtHelper.saveJwtInCookie(res, { accessToken, refreshToken });

    const redirectUrl = this.cls.get('redirectUrl') ?? envs.AUTH_REDIRECT_URL;

    return res.redirect(redirectUrl);
  }
}
