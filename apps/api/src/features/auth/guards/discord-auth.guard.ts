import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class DiscordAuthGuard extends AuthGuard('discord') {
  async canActivate(context: ExecutionContext) {
    const activate = (await super.canActivate(context)) as boolean;
    const request = context.switchToHttp().getRequest();

    await super.logIn(request);
    return activate;
  }
}

@Injectable()
export class DiscordGqlAuthGuard extends AuthGuard('discord') {
  async canActivate(context: ExecutionContext) {
    // const request = context.switchToHttp().getRequest();
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;

    const activate = (await super.canActivate(ctx.getContext())) as boolean;

    await super.logIn(request);
    return activate;
  }
}
