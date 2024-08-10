import { EventService } from './services/event.service';
import { Module } from '@nestjs/common';
import { EventsResolver } from './resolvers/events.resolver';
import { DatabaseModule } from '@/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [EventsResolver, EventService],
})
export class EventsModule {}
