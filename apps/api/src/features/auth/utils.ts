import { Response } from 'express';
import { JwtModel } from './models/jwt.model';

export class JwtHelper {
  static saveJwtInCookie(res: Response, jwt: JwtModel) {
    res.cookie('access-token', jwt.accessToken, {
      httpOnly: true,
      maxAge: 1.8e6,
    });

    res.cookie('refresh-token', jwt.refreshToken, {
      httpOnly: true,
      maxAge: 1.8e6,
    });
  }
}
