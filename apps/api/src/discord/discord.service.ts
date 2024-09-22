import { HttpService } from '@nestjs/axios';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { DiscordMember, DiscordRole } from './types';
import * as consts from './consts';

@Injectable()
export class DiscordService {
  constructor(
    private readonly http: HttpService,
    @Inject(consts.GUILD_ID_PROVIDER)
    private readonly guildId: string,
    @Inject(consts.DISCORD_API_KEY_PROVIDER)
    private readonly apiKey: string,
  ) {}

  async findGuildMember(accessToken: string): Promise<DiscordMember | null> {
    const url = `${consts.DISCORD_BASE_API}/users/@me/guilds/${this.guildId}/member`;

    try {
      const { data } = await firstValueFrom(
        this.http.get(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }),
      );

      return data as DiscordMember;
    } catch (err) {
      return null;
    }
  }

  async getGuildRole(roleId: string): Promise<DiscordRole> {
    const url = `${consts.DISCORD_BASE_API}/guilds/${this.guildId}/roles/${roleId}`;

    const { data } = await firstValueFrom(
      this.http.get(url, {
        headers: {
          Authorization: `Bot ${this.apiKey}`,
        },
      }),
    );

    if (data.code === 404) {
      throw new NotFoundException('Role not found: ', roleId);
    }

    return data;
  }
}
