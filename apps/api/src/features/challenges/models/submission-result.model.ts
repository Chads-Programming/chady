import { Field, ObjectType } from '@nestjs/graphql';
import { SubmissionStatus } from '@prisma/client';
import { InputExecutionResult } from './input-execution-result.model';
import { RegisteredSubmission } from './registered-submission.model';

@ObjectType()
export class SubmissionResult {
  @Field(() => RegisteredSubmission)
  submission: RegisteredSubmission;

  @Field(() => [InputExecutionResult])
  inputResults: InputExecutionResult[];

  @Field(() => SubmissionStatus)
  status: SubmissionStatus;
}
