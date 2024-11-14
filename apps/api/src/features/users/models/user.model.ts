import { Field, ObjectType, OmitType } from '@nestjs/graphql';

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

@ObjectType()
export class SimpleUser extends OmitType(User, [
  'roles',
  'avatar',
  'discriminator',
]) {}
