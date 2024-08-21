import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsObject, IsString } from 'class-validator';

@InputType()
export class CreateTestCaseInput {
  @Field()
  @IsNotEmpty()
  @IsObject()
  args: Record<string, unknown>;

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
