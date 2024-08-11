import { EventService } from './services/event.service';
import { Module } from '@nestjs/common';
import { EventsResolver } from './resolvers/events.resolver';
import { DatabaseModule } from '@/database/database.module';
import { ScheduleService } from './services/schedule.service';
import { ScheduleResolver } from './resolvers/schedule.resolver';

@Module({
  imports: [DatabaseModule],
  providers: [EventsResolver, ScheduleResolver, EventService, ScheduleService],
})
export class EventsModule {}
