import { envs } from '@/config';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { MemberNotfoundError } from '../errors';

@Injectable()
export class DiscordAuthGuard extends AuthGuard('discord') {
  handleRequest(err, user, info, context: ExecutionContext) {
    const res: Response = context.switchToHttp().getResponse();

    if (err instanceof MemberNotfoundError) {
      return res.redirect(envs.MEMBER_NOT_FOUND_REDIRECT_URL);
    }

    return super.handleRequest(err, user, info, context);
  }
}
