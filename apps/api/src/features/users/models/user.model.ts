import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  avatar: string;

  @Field()
  email: string;

  @Field(() => [String])
  roles: string[];
}
