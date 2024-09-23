import { DiscordService } from '@/discord/discord.service';
import { UserService } from '@/features/users/services/user.service';
import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Profile } from 'passport-discord';
import { User } from '../users/models/user.model';
import { JWT_ACCESS_SERVICE, JWT_REFRESH_SERVICE } from './consts';
import { MemberNotfoundError } from './errors';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly discordService: DiscordService,
    @Inject(JWT_ACCESS_SERVICE)
    private readonly jwtAccessService: JwtService,
    @Inject(JWT_REFRESH_SERVICE)
    private readonly jwtRefreshService: JwtService,
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
      throw new MemberNotfoundError('User is not part of discord server');
    }

    return member;
  }

  async validateUserById(id: string) {
    return this.userService.findUserById(id);
  }

  async generateJwt(user: User) {
    return {
      accessToken: this.jwtAccessService.sign(user),
      refreshToken: this.jwtRefreshService.sign({ id: user.id }),
    };
  }
}
