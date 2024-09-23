import { Response } from 'express';
import { JwtModel } from './models/jwt.model';

// biome-ignore lint/complexity/noStaticOnlyClass: just a simple helper
export class JwtHelper {
  static saveJwtInCookie(res: Response, jwt: JwtModel) {
    res.cookie('access-token', jwt.accessToken, {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 1.8e6,
    });

    res.cookie('refresh-token', jwt.refreshToken, {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 1.8e6,
    });
  }

  static clearJwtCookies(res: Response) {
    res.clearCookie('access-token');
    res.clearCookie('refresh-token');
  }
}
