import { DISCORD_ROLES } from '@/features/auth/consts';
import { SetMetadata, UseGuards, applyDecorators } from '@nestjs/common';
import { AllowedRolesGuard } from '../guards/allowed-roles.guard';
import { GQLJwtAuthGuard } from '../guards/graphql-jwt-auth.guard';

export const AllowedDiscordRoles = (...roles: DISCORD_ROLES[]) => {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(GQLJwtAuthGuard, AllowedRolesGuard),
  );
};
