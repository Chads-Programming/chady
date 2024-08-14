export interface DiscordUser {
  id: string;
  username: string;
  discriminator: string;
  avatar: string;
  verified: boolean;
  email: string;
  flags: number;
  banner: string;
  accent_color: number;
  premium_type: number;
  public_flags: number;
  avatar_decoration_data: AvatarDecorationData;
}

export interface AvatarDecorationData {
  sku_id: string;
  asset: string;
}

export interface DiscordRole {
  id: string;
  name: string;
  color: number;
  hoist: boolean;
  icon: string;
  unicode_emoji: null;
  position: number;
  permissions: string;
  managed: boolean;
  mentionable: boolean;
  flags: number;
}

export interface DiscordMember {
  user: DiscordUser;
  nick: string;
  avatar: string | null;
  roles: string[];
  joined_at: Date;
  deaf: boolean;
  mute: boolean;
}
