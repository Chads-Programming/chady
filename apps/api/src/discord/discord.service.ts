import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { DiscordMember } from './types';

@Injectable()
export class DiscordService {
  constructor(private readonly http: HttpService) {}

  async findGuildMember(
    serverId: string,
    accessToken: string,
  ): Promise<DiscordMember | null> {
    const url = `https://discord.com/api/users/@me/guilds/${serverId}/member`;

    const { data } = await firstValueFrom(
      this.http.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    );

    if (data.code === 404) {
      return null;
    }

    return data as DiscordMember;
  }
}
