import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { Difficult, ProgrammingLang } from '@prisma/client';
import { IsIn, MaxLength, MinLength } from 'class-validator';

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

  @Field((type) => Difficult)
  @IsIn(Object.values(Difficult))
  difficult: Difficult;
}
