import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { EventService } from './../services/event.service';
import { Event, PaginatedEvents } from '../models/event.model';
import { RegisterEventInput } from '../dtos/register-event.input';
import { UpdateEventInput } from '../dtos/event.input';
import { EventArgs } from '../dtos/event.args';
import { User } from '@/features/users/models/user.model';
import { PageInfo } from '@/common/dto/page-info';
import { AllowedDiscordRoles } from '@/features/auth/decorators/discord-roles';
import { DISCORD_ROLES } from '@/features/auth/consts';

@Resolver(() => Event)
export class EventsResolver {
  constructor(private readonly eventService: EventService) {}

  @Query(() => PaginatedEvents)
  async events(@Args() eventArgs: EventArgs) {
    const { data, currentPage, hasNextPage, total, totalPages } =
      await this.eventService.findAll(eventArgs);

    const pageInfo = new PageInfo();
    const paginated = new PaginatedEvents();

    pageInfo.currentPage = currentPage;
    pageInfo.hasNextPage = hasNextPage;
    pageInfo.total = total;
    pageInfo.totalPages = totalPages;

    paginated.data = data;
    paginated.pageInfo = pageInfo;

    return paginated;
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
