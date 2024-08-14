import { DISCORD_ROLES } from '@/features/auth/consts';
import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { GraphQLAuthGuard } from '../guards/grahpql-auth.guard';
import { AllowedRolesGuard } from '../guards/allowed-roles.guard';

export const AllowedDiscordRoles = (...roles: DISCORD_ROLES[]) => {
  SetMetadata('roles', roles);
  return applyDecorators(UseGuards(GraphQLAuthGuard, AllowedRolesGuard));
};
