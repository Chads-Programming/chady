import { envs } from '@/config';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-discord';
import { AuthService } from '../auth.service';

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy, 'discord') {
  constructor(private readonly authService: AuthService) {
    super({
      clientID: envs.DISCORD_CLIENT_ID,
      clientSecret: envs.DISCORD_CLIENT_SECRET,
      callbackURL: envs.DISCORD_CALLBACK_URL,
      passReqToCallback: true,
      scope: ['identify', 'guilds', 'guilds.members.read'],
    });
  }

  async validate(
    req: Request,
    accessToken: string,
    refreshToken: string,
    profile: Profile,
  ) {
    const { username, discriminator, id: discordId, avatar } = profile;
    const details = {
      username,
      discriminator,
      discordId,
      avatar,
      accessToken,
      refreshToken,
    };

    const member = await this.authService.validateUser(accessToken);

    const user = await this.authService.createUpdateAccount({
      ...details,
      roles: member.roles,
    });

    return user;
  }

  authenticate(req, options) {
    options.state = req.query.redirectUrl;
    super.authenticate(req, options);
  }
}
