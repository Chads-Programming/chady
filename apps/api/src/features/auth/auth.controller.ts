import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { DiscordAuthGuard } from '@/auth/guards/discord-auth.guard';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { envs } from '@/config';

@Controller('auth')
export class AuthController {
  @Get('discord/login')
  @UseGuards(DiscordAuthGuard)
  login() {
    return;
  }

  @Get('discord/redirect')
  @UseGuards(DiscordAuthGuard)
  redirect(@Res() res: Response) {
    res.redirect(envs.AUTH_REDIRECT_URL);
  }

  @Get('logout')
  @UseGuards(AuthenticatedGuard)
  logout(@Req() req: Request) {
    req.logOut({ keepSessionInfo: false }, () => null);
  }
}
