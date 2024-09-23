import { PrismaService } from '@/database/prisma.service';
import { DiscordService } from '@/discord/discord.service';
import { CreateUserDto } from '@/features/users/dto/create-user.dto';
import { UpdateUserDto } from '@/features/users/dto/update-user.dto';
import { Injectable } from '@nestjs/common';
import roleMappings from '../mappings/role-detail.mapped';
import { RoleDetail } from '../models/role-detail.model';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly discordService: DiscordService,
  ) {}

  findUserByDiscordId(discordId: string) {
    return this.prisma.user.findFirst({
      where: { discordId },
    });
  }

  findUserById(id: string) {
    return this.prisma.user.findFirst({
      where: { id },
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

  async findUserRolesDetails(roleIds: string[]): Promise<RoleDetail[]> {
    const requests = roleIds.map((id) => this.discordService.getGuildRole(id));
    try {
      const roles = await Promise.all(requests);

      return roles.map((role) => roleMappings.fromDiscordRole(role));
    } catch (err) {
      throw err;
    }
  }
}
