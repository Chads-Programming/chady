import { Field, ObjectType, OmitType } from '@nestjs/graphql';
import { RoleDetail } from './role-detail.model';

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
