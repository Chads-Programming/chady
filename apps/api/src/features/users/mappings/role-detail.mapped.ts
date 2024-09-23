import { DiscordRole } from '@/discord/types';
import discordUtils from '@/discord/utils';
import { RoleDetail } from '../models/role-detail.model';

const fromDiscordRole = (discordRole: DiscordRole): RoleDetail => ({
  id: discordRole.id,
  imageUrl: discordUtils.getRoleIcon(discordRole.id, discordRole.icon ?? ''),
  name: discordRole.name,
  color: discordRole.color,
});

export default { fromDiscordRole };
