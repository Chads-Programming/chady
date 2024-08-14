export class CreateUserDto {
  username: string;
  discordId: string;
  roles: string[];
  avatar: string;
  discriminator: string;
  accessToken: string;
  refreshToken: string;
}
