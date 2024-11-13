import { envs } from '@/config';
import { Response } from 'express';
import ms from 'ms';
import { JwtModel } from './models/jwt.model';

// biome-ignore lint/complexity/noStaticOnlyClass: just a simple helper
export class JwtHelper {
  static saveJwtInCookie(res: Response, jwt: JwtModel) {
    res.cookie('access-token', jwt.accessToken, {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: ms(envs.JWT_ACCESS_EXPIRATION),
    });

    res.cookie('refresh-token', jwt.refreshToken, {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: ms(envs.JWT_REFRESH_EXPIRATION),
    });
  }

  static clearJwtCookies(res: Response) {
    res.clearCookie('access-token');
    res.clearCookie('refresh-token');
  }
}
