import { DiscordService } from '@/discord/discord.service';
import { UserService } from '@/features/users/services/user.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Profile } from 'passport-discord';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './types';
import { User } from '../users/models/user.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly discordService: DiscordService,
    private readonly jwtService: JwtService,
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

  async validateUserById(id: string) {
    return this.userService.findUserById(id);
  }

  async generateJwt(user: User) {
    return {
      accessToken: this.jwtService.sign(user),
      refreshToken: this.jwtService.sign({ id: user.id }),
    };
  }
}
