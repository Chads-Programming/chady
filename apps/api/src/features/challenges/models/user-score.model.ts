import { User } from '@/users/models/user.model';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserScoreModel {
  @Field(() => User)
  user: User;

  @Field()
  userId: string;

  @Field()
  totalScore: number;
}
