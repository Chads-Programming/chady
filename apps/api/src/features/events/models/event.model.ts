import { Paginated } from '@/common/dto/page-info';
import { User } from '@/features/users/models/user.model';
import { Field, ObjectType } from '@nestjs/graphql';
import { EventSchedule } from './schedule.model';

@ObjectType()
export class Event {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [User])
  creators?: User[];

  @Field(() => EventSchedule)
  schedule: EventSchedule;
}

@ObjectType()
export class PaginatedEvents extends Paginated(Event) {}
