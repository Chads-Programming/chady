import { DISCORD_ROLES } from '@/features/auth/consts';
import { AllowedDiscordRoles } from '@/features/auth/decorators/discord-roles';
import { ParseIntPipe } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UpdateEventScheduleInput } from '../dtos/schedule.input';
import { EventSchedule } from '../models/schedule.model';
import { ScheduleService } from './../services/schedule.service';

@Resolver(() => EventSchedule)
export class ScheduleResolver {
  constructor(private readonly scheduleService: ScheduleService) {}

  @AllowedDiscordRoles(
    DISCORD_ROLES.ULTRA_CHAD,
    DISCORD_ROLES.LEGACY_ADMIN,
    DISCORD_ROLES.GIGA_CHAD,
  )
  @Mutation(() => EventSchedule)
  updateSchedule(
    @Args('id', ParseIntPipe) id: number,
    @Args('schedule') schedule: UpdateEventScheduleInput,
  ) {
    return this.scheduleService.updateSchedule(id, schedule);
  }
}
