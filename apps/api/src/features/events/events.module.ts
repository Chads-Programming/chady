import { Module } from '@nestjs/common';
import { EventsResolver } from './resolvers/events.resolver';

@Module({
  providers: [EventsResolver],
})
export class EventsModule {}
