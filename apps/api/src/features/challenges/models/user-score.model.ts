import { UserDetail } from '@/features/users/models/user-detail.model';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserScoreModel {
  @Field(() => UserDetail)
  user: UserDetail;

  @Field()
  userId: string;

  @Field()
  totalScore: number;
}
