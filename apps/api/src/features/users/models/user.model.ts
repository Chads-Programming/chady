import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  discordId: string;

  @Field()
  username: string;

  @Field()
  avatar: string;

  @Field()
  discriminator: string;

  @Field(() => [String])
  roles: string[];
}
