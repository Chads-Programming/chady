import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { Difficult, ProgrammingLang } from '@prisma/client';
import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

registerEnumType(ProgrammingLang, {
  name: 'ProgrammingLang',
});

@InputType()
export class CreateCodeChallengeInput {
  @Field()
  @MaxLength(30)
  title: string;

  @Field()
  @MinLength(30)
  description: string;

  @Field()
  @IsOptional()
  @MinLength(10)
  solutionCode?: string;

  @Field()
  @IsString()
  @MinLength(10)
  mainCode: string;

  @Field()
  @MinLength(10)
  startedCode: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  mainFunctionName: string;

  @Field((type) => ProgrammingLang)
  @IsIn(Object.values(ProgrammingLang))
  lang: ProgrammingLang;

  @Field((type) => Difficult)
  @IsIn(Object.values(Difficult))
  difficult: Difficult;
}
