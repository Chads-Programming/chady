import { DISCORD_ROLES } from '@/features/auth/consts';
import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { AllowedRolesGuard } from '../guards/allowed-roles.guard';
import { GQLJwtAuthGuard } from '../guards/graphql-jwt-auth.guard';

export const AllowedDiscordRoles = (...roles: DISCORD_ROLES[]) => {
  SetMetadata('roles', roles);
  return applyDecorators(UseGuards(GQLJwtAuthGuard, AllowedRolesGuard));
};
