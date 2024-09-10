import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class JwtModel {
  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;
}
