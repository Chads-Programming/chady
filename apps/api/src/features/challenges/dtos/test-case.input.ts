import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateTestCaseInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  args: string;

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
