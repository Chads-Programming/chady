import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ExecutionOutput {
  @Field()
  executionTime: number;

  @Field()
  timeFormat: string;

  @Field(() => [Output])
  outputs: Output[];
}

@ObjectType()
export class Output {
  @Field()
  inputId: string;

  @Field()
  inputValue: string;

  @Field()
  output: string;
}
