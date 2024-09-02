import { Paginated } from '@/common/dto/page-info';
import {
  Field,
  GraphQLISODateTime,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { Difficult, ProgrammingLang } from '@prisma/client';
import { TestCase } from './test-case.model';

registerEnumType(Difficult, {
  name: 'Difficult',
});

@ObjectType()
export class CodeChallenge {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  mainCode: string;

  @Field()
  startedCode: string;

  @Field(() => ProgrammingLang)
  lang: ProgrammingLang;

  @Field(() => Difficult)
  difficult: Difficult;

  @Field(() => [TestCase], { defaultValue: [] })
  testCases?: TestCase[];

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}

@ObjectType()
export class PaginatedChallenges extends Paginated(CodeChallenge) {}
