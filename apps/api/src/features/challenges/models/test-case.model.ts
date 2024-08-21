import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TestCase {
  id: number;
  @Field(() => Object)
  args: Record<string, unknown>;

  @Field(() => Object)
  expectedOutput: string;

  @Field(() => Boolean)
  isSecret: boolean;
}
