import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { ProgrammingLang } from '@prisma/client';
import { IsIn, IsOptional, MaxLength, MinLength } from 'class-validator';

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
  @MinLength(10)
  startedCode: string;

  @Field()
  @Field((type) => ProgrammingLang)
  @IsIn(Object.values(ProgrammingLang))
  lang: ProgrammingLang;
}