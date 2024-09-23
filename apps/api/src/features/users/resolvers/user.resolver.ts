import discordUtils from '@/discord/utils';
import { GqlCurrentUser } from '@/features/auth/decorators/current-user';
import { GQLJwtAuthGuard } from '@/features/auth/guards/graphql-jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UserDetail } from '../models/user-detail.model';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { RoleDetail } from './../models/role-detail.model';

@UseGuards(GQLJwtAuthGuard)
@Resolver(() => UserDetail)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserDetail)
  findProfile(@GqlCurrentUser() user: User): Omit<UserDetail, 'roles'> {
    return {
      ...user,
      avatarUrl: discordUtils.getAvatarUrl(user.discordId, user.avatar),
      rolesIds: user.roles,
    };
  }

  @ResolveField(() => [RoleDetail])
  async roles(@Parent() userDetail: UserDetail) {
    return this.userService.findUserRolesDetails(userDetail.rolesIds);
  }
}
