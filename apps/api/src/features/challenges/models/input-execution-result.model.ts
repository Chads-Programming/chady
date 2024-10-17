import { Field, ObjectType } from '@nestjs/graphql';
import { TestCaseModel } from './test-case.model';

@ObjectType()
export class InputExecutionResult {
  @Field(() => TestCaseModel)
  testCase: TestCaseModel;

  @Field()
  output: string;

  @Field()
  executionTime: number;

  @Field()
  timeFormat: string;

  @Field()
  isSuccess: boolean;
}
