import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
export class TestCaseModel {
  @Field()
  id: number;

  @Field(() => GraphQLJSON)
  args: Record<string, unknown>;

  @Field()
  expectedOutput: string;

  @Field(() => Boolean)
  isSecret: boolean;
}
