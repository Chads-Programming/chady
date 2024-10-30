import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import get from 'just-safe-get';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { envs } from '@/config';
import { AuthService } from '../auth.service';
import { JwtPayload } from '../types';

@Injectable()
export class RefreshJwtStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(private readonly authService: AuthService) {
    super({
      ignoreExpiration: false,
      secretOrKey: envs.JWT_REFRESH_SECRET,
      jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(),
        (req) => get(req, 'cookies.refresh-token'),
      ]),
    });
  }

  async validate({ id }: JwtPayload) {
    return this.authService.validateUserById(id);
  }
}
