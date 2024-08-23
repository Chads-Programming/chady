import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateSubmissionInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  solutionCode: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  challengeId: string;
}

@InputType()
export class UpdateSubmissionInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  solutionCode: string;
}
