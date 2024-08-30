import { UserDetail } from '@/features/users/models/user-detail.model';
import {
  Field,
  GraphQLISODateTime,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { SubmissionStatus } from '@prisma/client';
import { CodeChallenge } from './code-challenge.model';
import { TestCase } from './test-case.model';

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

@ObjectType()
export class InputExecutionResult {
  @Field(() => TestCase)
  testCase: TestCase;

  @Field()
  output: string;

  @Field()
  executionTime: number;

  @Field()
  timeFormat: string;
}

@ObjectType()
export class SubmissionResult {
  @Field(() => Submission)
  submission: Submission;

  @Field(() => [InputExecutionResult])
  inputResults: InputExecutionResult[];
}
