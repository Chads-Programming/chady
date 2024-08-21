import { User } from '@prisma/client';

export interface UserDetail extends User {
  roles: string[];
}

export interface DiscordUserProfile {
  username: string;
  discriminator: string;
  discordId: string;
  avatar: string;
  accessToken: string;
  refreshToken: string;
}
