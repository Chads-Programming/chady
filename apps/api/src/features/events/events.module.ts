import { DatabaseModule } from '@/database/database.module';
import { Module } from '@nestjs/common';
import { EventsResolver } from './resolvers/events.resolver';
import { ScheduleResolver } from './resolvers/schedule.resolver';
import { EventService } from './services/event.service';
import { ScheduleService } from './services/schedule.service';

@Module({
  imports: [DatabaseModule],
  providers: [EventsResolver, ScheduleResolver, EventService, ScheduleService],
})
export class EventsModule {}
