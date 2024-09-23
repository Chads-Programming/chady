import { envs } from '@/config';
import { DiscordService } from '@/discord/discord.service';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import * as consts from './consts';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [
    DiscordService,
    {
      provide: consts.GUILD_ID_PROVIDER,
      useValue: envs.DISCORD_SERVER_ID,
    },
    {
      provide: consts.DISCORD_API_KEY_PROVIDER,
      useValue: envs.DISCORD_API_KEY,
    },
  ],
  exports: [DiscordService],
})
export class DiscordModule {}
