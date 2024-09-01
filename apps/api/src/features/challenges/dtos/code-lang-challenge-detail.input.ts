import { Field, InputType, PartialType } from '@nestjs/graphql';
import { ProgrammingLang } from '@prisma/client';
import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

@InputType()
export class CreateCodeLangChallengeDetailInput {
  @IsNotEmpty()
  @IsString()
  @Field()
  mainCode: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  startedCode: string;

  @Field()
  @IsOptional()
  @MinLength(10)
  solutionCode?: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(Object.values(ProgrammingLang))
  @Field(() => ProgrammingLang)
  lang: ProgrammingLang;
}

@InputType()
export class UpdateCodeLangChallengeDetailInput extends PartialType(
  CreateCodeLangChallengeDetailInput,
) {}
