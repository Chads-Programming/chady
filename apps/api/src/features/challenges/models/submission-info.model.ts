import { SimpleUser } from '@/features/users/models/user.model';
import { Field, ObjectType } from '@nestjs/graphql';
import { ProgrammingLang } from '@prisma/client';

@ObjectType()
export class SubmissionInfo {
  @Field()
  runtime: number;

  @Field(() => ProgrammingLang)
  lang: ProgrammingLang;

  @Field(() => SimpleUser)
  user: SimpleUser;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
