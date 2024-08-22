import { Paginated } from '@/common/dto/page-info';
import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { ProgrammingLang } from '@prisma/client';
import { TestCase } from './test-case.model';

@ObjectType()
export class CodeChallenge {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  startedCode: string;

  @Field(() => ProgrammingLang)
  lang: ProgrammingLang;

  @Field(() => [TestCase], { defaultValue: [] })
  testCases?: TestCase[];

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}

@ObjectType()
export class PaginatedChallenges extends Paginated(CodeChallenge) {}
