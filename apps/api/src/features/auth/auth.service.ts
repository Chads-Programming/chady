import { DiscordService } from '@/discord/discord.service';
import { UserService } from '@/features/users/services/user.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Profile } from 'passport-discord';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly discordService: DiscordService,
  ) {}

  async createUpdateAccount(discordUser: Profile) {
    const user = await this.userService.findUserByDiscordId(
      discordUser.discordId,
    );

    if (user) {
      return this.userService.updateUser(user.id, discordUser);
    }

    return this.userService.createUser(discordUser);
  }

  async validateUser(accessToken: string) {
    const member = await this.discordService.findGuildMember(accessToken);

    if (!member) {
      throw new UnauthorizedException('User is not part of discord server');
    }

    return member;
  }
}
