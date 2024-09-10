import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { GqlExecutionContext } from '@nestjs/graphql';
import { UserDetail } from '../types';

export const GqlCurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);

    return ctx.getContext().req.user;
  },
);

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest();
    return req.user as UserDetail;
  },
);
