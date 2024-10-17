import { CodeLangChallengeDetail } from '@/challenges/models/code-lang-challenge-detail.model';
import { Paginated } from '@/common/dto/page-info';
import {
  Field,
  GraphQLISODateTime,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { Difficult } from '@prisma/client';
import { TestCaseModel } from './test-case.model';

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
  description: string;

  @Field()
  startedCode: string;

  @Field(() => Difficult)
  difficult: Difficult;

  @Field(() => [CodeLangChallengeDetail])
  langDetails: CodeLangChallengeDetail[];

  @Field(() => [TestCaseModel], { defaultValue: [] })
  testCases?: TestCaseModel[];

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}

@ObjectType()
export class PaginatedChallenges extends Paginated(CodeChallenge) {}
