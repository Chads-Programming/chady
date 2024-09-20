import { Profile, Strategy } from 'passport-discord';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { envs } from '@/config';
import { ClsService } from 'nestjs-cls';
import { AuthStore } from '../types';

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy, 'discord') {
  constructor(
    private readonly authService: AuthService,
    private readonly cls: ClsService<AuthStore>,
  ) {
    super({
      clientID: envs.DISCORD_CLIENT_ID,
      clientSecret: envs.DISCORD_CLIENT_SECRET,
      callbackURL: envs.DISCORD_CALLBACK_URL,
      passReqToCallback: true,
      scope: ['identify', 'guilds', 'guilds.members.read'],
    });
  }

  async validate(
    req: { query: Record<string, string> },
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

    const redirectUrl = req.query.redirectUrl;

    this.cls.set('redirectUrl', redirectUrl);

    return user;
  }
}
