import { PrismaService } from '@/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { Profile } from 'passport-discord';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async validateUser(discordUser: Profile) {
    const user = await this.prisma.user.findFirst({
      where: { discordId: discordUser.discordId },
    });

    if (user) {
      return this.prisma.user.update({
        where: { id: user.id },
        data: {
          avatar: user.avatar,
          username: user.username,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
        },
      });
    }

    return this.prisma.user.create({
      data: {
        username: discordUser.username,
        avatar: discordUser.avatar,
        discriminator: discordUser.discriminator,
        discordId: discordUser.discordId,
        accessToken: discordUser.accessToken,
        refreshToken: discordUser.refreshToken,
      },
    });
  }

  findUserByDiscordId(discordId: string) {
    return this.prisma.user.findFirst({
      where: { discordId },
    });
  }
}
