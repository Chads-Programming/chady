import * as consts from './consts';

function getAvatarUrl(discordId: string, avatarHash: string) {
  return `${consts.DISCORD_BASE_IMAGE_URL}/avatars/${discordId}/${avatarHash}.webp`;
}

function getRoleIcon(roleId: string, roleHash: string) {
  return `${consts.DISCORD_BASE_IMAGE_URL}/role-icons/${roleId}/${roleHash}.png`;
}

export default { getAvatarUrl, getRoleIcon };
