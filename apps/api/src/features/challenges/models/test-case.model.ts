import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TestCaseModel {
  @Field()
  id: number;

  @Field()
  args: string;

  @Field()
  expectedOutput: string;

  @Field(() => Boolean)
  isSecret: boolean;
}
