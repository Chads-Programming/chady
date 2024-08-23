import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsObject, IsString } from 'class-validator';
// import GraphQLJSON from 'graphql-type-json';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class CreateTestCaseInput {
  @Field(() => GraphQLJSON)
  @IsNotEmpty()
  @IsObject()
  args: object;

  @Field()
  @IsNotEmpty()
  @IsString()
  expectedOutput: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  codeChallengeId: string;

  @Field()
  @IsNotEmpty()
  @IsBoolean()
  isSecret: boolean;
}
