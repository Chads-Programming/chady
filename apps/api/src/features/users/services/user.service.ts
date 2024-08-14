import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/database/prisma.service';
import { CreateUserDto } from '@/features/users/dto/create-user.dto';
import { UpdateUserDto } from '@/features/users/dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  findUserByDiscordId(discordId: string) {
    return this.prisma.user.findFirst({
      where: { discordId },
    });
  }

  createUser(user: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        username: user.username,
        avatar: user.avatar,
        discriminator: user.discriminator,
        discordId: user.discordId,
        accessToken: user.accessToken,
        refreshToken: user.refreshToken,
        roles: user.roles,
      },
    });
  }

  updateUser(id: string, user: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: {
        avatar: user.avatar,
        username: user.username,
        accessToken: user.accessToken,
        refreshToken: user.refreshToken,
        roles: user.roles,
      },
    });
  }
}
