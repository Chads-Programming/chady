import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { ProgrammingLang } from '@prisma/client';

@ObjectType()
export class CodeLangChallengeDetail {
  @Field()
  id: number;

  @Field()
  mainCode: string;

  @Field()
  startedCode: string;

  @Field()
  codeChallengeId: string;

  @Field(() => ProgrammingLang)
  lang: ProgrammingLang;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}
