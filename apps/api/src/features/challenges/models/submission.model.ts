import { UserDetail } from '@/features/users/models/user-detail.model';
import {
  Field,
  GraphQLISODateTime,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { ProgrammingLang, SubmissionStatus } from '@prisma/client';
import { CodeChallenge } from './code-challenge.model';

registerEnumType(SubmissionStatus, {
  name: 'SubmissionStatus',
});

@ObjectType()
export class Submission {
  @Field()
  id: string;

  @Field()
  solutionCode: string;

  @Field()
  runtime: number;

  @Field(() => ProgrammingLang)
  lang: ProgrammingLang;

  @Field()
  score: number;

  @Field()
  status: SubmissionStatus;

  @Field(() => CodeChallenge)
  codeChallenge: CodeChallenge;

  @Field(() => UserDetail)
  user: UserDetail;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}
