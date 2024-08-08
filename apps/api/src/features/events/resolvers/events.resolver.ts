import { Query, Resolver } from '@nestjs/graphql';
import { Event } from '../models/event.model';

@Resolver()
export class EventsResolver {
  @Query(() => [Event])
  async events() {
    return {};
  }
}
