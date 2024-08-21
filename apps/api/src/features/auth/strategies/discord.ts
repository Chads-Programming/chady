import { Profile, Strategy } from 'passport-discord';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { envs } from '@/config';
import { DiscordService } from '@/discord/discord.service';

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy, 'discord') {
  constructor(private readonly authService: AuthService) {
    super({
      clientID: envs.DISCORD_CLIENT_ID,
      clientSecret: envs.DISCORD_CLIENT_SECRET,
      callbackURL: envs.DISCORD_CALLBACK_URL,
      scope: ['identify', 'guilds', 'guilds.members.read'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
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

    return this.authService.createUpdateAccount({
      ...details,
      roles: member.roles,
    });
  }
}
