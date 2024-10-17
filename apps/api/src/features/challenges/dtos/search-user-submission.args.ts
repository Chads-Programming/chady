import { ArgsType, Field } from '@nestjs/graphql';
import { ProgrammingLang } from '@prisma/client';
import { IsIn, IsOptional } from 'class-validator';

@ArgsType()
export class SearchUserSubmissionArgs {
  @Field(() => String)
  codeChallengeId: string;

  @Field(() => ProgrammingLang)
  @IsOptional()
  @IsIn(Object.values(ProgrammingLang))
  programmingLang: ProgrammingLang;
}
