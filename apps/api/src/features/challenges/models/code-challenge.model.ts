import { Paginated } from '@/common/dto/page-info';
import { Field, ObjectType } from '@nestjs/graphql';
import { ProgrammingLang } from '@prisma/client';

@ObjectType()
export class CodeChallenge {
  @Field()
  id: string;
  @Field()
  title: string;
  @Field()
  startedCode: string;

  @Field(() => Date)
  createadAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => ProgrammingLang)
  lang: ProgrammingLang;

  @Field()
  testCases: null;
}

@ObjectType()
export class PaginatedChallenges extends Paginated(CodeChallenge) {}
