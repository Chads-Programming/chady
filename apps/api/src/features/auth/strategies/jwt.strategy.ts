import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import get from 'just-safe-get';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { envs } from '@/config';
import { AuthService } from '../auth.service';
import { JwtPayload } from '../types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      ignoreExpiration: true,
      secretOrKey: envs.JWT_ACCESS_SECRET,
      jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(),
        (req) => get(req, 'cookies.access-token'),
      ]),
    });
  }

  async validate({ id }: JwtPayload) {
    return this.authService.validateUserById(id);
  }
}
