import { User } from '@prisma/client';
import { ClsStore } from 'nestjs-cls';
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

export interface JwtPayload {
  id: string;
}

export interface AuthStore extends ClsStore {
  redirectUrl?: string;
}
