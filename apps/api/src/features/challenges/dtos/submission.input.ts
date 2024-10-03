import { Field, InputType } from '@nestjs/graphql';
import { ProgrammingLang } from '@prisma/client';
import { IsIn, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class SubmissionInput {
  @Field((type) => ProgrammingLang)
  @IsNotEmpty()
  @IsIn(Object.values(ProgrammingLang))
  lang: ProgrammingLang;

  @Field()
  @IsNotEmpty()
  @IsString()
  solutionCode: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  challengeId: string;
}
