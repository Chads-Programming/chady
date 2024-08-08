import { User } from '@/features/users/models/user.model';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Event {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [User])
  creators: User[];
}
