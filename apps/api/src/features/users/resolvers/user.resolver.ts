import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { User } from '../models/user.model';
import { UseGuards } from '@nestjs/common';
import { GraphQLAuthGuard } from '@/features/auth/guards/grahpql-auth.guard';
import { CurrentUser } from '@/features/auth/decorators/current-user';
import { RoleDetail } from '../models/role-detail.model';
import { DISCORD_BASE_IMAGE_URL } from '@/discord/consts';
import { UserDetail } from '../models/user-detail.model';

@Resolver()
export class UserResolver {
  @UseGuards(GraphQLAuthGuard)
  @Query(() => UserDetail)
  findProfile(@CurrentUser() user: User) {
    return user;
  }

  @ResolveField(() => [RoleDetail])
  async roles(@Parent() userDetail: UserDetail) {
    return [];
  }

  @ResolveField(() => String)
  async avatarUrl(@Parent() { discordId, avatar }: UserDetail) {
    return `${DISCORD_BASE_IMAGE_URL}/avatars/${discordId}/avatar/${avatar}.webp`;
  }
}
