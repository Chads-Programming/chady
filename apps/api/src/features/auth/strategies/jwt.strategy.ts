import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import get from 'just-safe-get';

import { AuthService } from '../auth.service';
import { JwtPayload } from '../types';
import { envs } from '@/config';

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
