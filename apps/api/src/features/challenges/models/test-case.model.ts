import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
export class TestCase {
  @Field()
  id: number;

  @Field(() => GraphQLJSON)
  args: JSON;

  @Field()
  expectedOutput: string;

  @Field(() => Boolean)
  isSecret: boolean;
}
