import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ScheduleService } from './../services/schedule.service';
import { EventSchedule } from '../models/schedule.model';
import { ParseIntPipe } from '@nestjs/common';
import { UpdateEventScheduleInput } from '../dtos/schedule.input';

@Resolver(() => EventSchedule)
export class ScheduleResolver {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Mutation(() => EventSchedule)
  updateSchedule(
    @Args('id', ParseIntPipe) id: number,
    @Args('schedule') schedule: UpdateEventScheduleInput,
  ) {
    return this.scheduleService.updateSchedule(id, schedule);
  }
}
