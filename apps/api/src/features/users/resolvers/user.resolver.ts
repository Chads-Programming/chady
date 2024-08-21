import { RoleDetail } from './../models/role-detail.model';
import discordUtils from '@/discord/utils';
import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { User } from '../models/user.model';
import { UseGuards } from '@nestjs/common';
import { GraphQLAuthGuard } from '@/features/auth/guards/grahpql-auth.guard';
import { CurrentUser } from '@/features/auth/decorators/current-user';
import { UserDetail } from '../models/user-detail.model';
import { UserService } from '../services/user.service';

@UseGuards(GraphQLAuthGuard)
@Resolver(() => UserDetail)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserDetail)
  findProfile(@CurrentUser() user: User): Omit<UserDetail, 'roles'> {
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
