import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { paginate } from '@/common/utils/paginate';
import { DISCORD_ROLES } from '@/features/auth/consts';
import { AllowedDiscordRoles } from '@/features/auth/decorators/discord-roles';
import { User } from '@/features/users/models/user.model';
import { EventArgs } from '../dtos/event.args';
import { UpdateEventInput } from '../dtos/event.input';
import { RegisterEventInput } from '../dtos/register-event.input';
import { Event, PaginatedEvents } from '../models/event.model';
import { EventService } from './../services/event.service';

@Resolver(() => Event)
export class EventsResolver {
  constructor(private readonly eventService: EventService) {}

  @Query(() => PaginatedEvents)
  async events(@Args() eventArgs: EventArgs) {
    const response = await this.eventService.findAll(eventArgs);

    return paginate(response);
  }

  @ResolveField(() => [User])
  async creators(@Parent() event: Event) {
    return this.eventService.findCreators(event.id);
  }

  @AllowedDiscordRoles(
    DISCORD_ROLES.ULTRA_CHAD,
    DISCORD_ROLES.LEGACY_ADMIN,
    DISCORD_ROLES.GIGA_CHAD,
  )
  @Mutation(() => Event)
  async registerEvent(@Args('newEvent') newEvent: RegisterEventInput) {
    return this.eventService.registerEvent(newEvent);
  }

  @AllowedDiscordRoles(
    DISCORD_ROLES.ULTRA_CHAD,
    DISCORD_ROLES.LEGACY_ADMIN,
    DISCORD_ROLES.GIGA_CHAD,
  )
  @Mutation(() => Event)
  async updateEvent(@Args('event') event: UpdateEventInput) {
    return this.eventService.updateEvent(event);
  }
}
