import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ScheduleService } from './../services/schedule.service';
import { EventSchedule } from '../models/schedule.model';
import { ParseIntPipe } from '@nestjs/common';
import { UpdateEventScheduleInput } from '../dtos/schedule.input';
import { AllowedDiscordRoles } from '@/features/auth/decorators/discord-roles';
import { DISCORD_ROLES } from '@/features/auth/consts';

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
