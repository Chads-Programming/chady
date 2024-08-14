import { type CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { User } from '@prisma/client';

@Injectable()
export class AllowedRolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    const ctx = GqlExecutionContext.create(context);
    const user = ctx.getContext().req.user as User;

    return this.matchRoles(user.roles, roles);
  }
  private matchRoles(userPermissions: string[], permissions: string[]) {
    return permissions.some((permission) =>
      userPermissions.includes(permission),
    );
  }
}
