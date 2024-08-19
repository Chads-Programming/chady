import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RoleDetail {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  imageUrl: string;
}
