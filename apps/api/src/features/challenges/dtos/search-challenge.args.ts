import { ArgsType, Field, Int } from '@nestjs/graphql';
import { ProgrammingLang } from '@prisma/client';
import { IsIn, IsNumber, IsOptional, Min } from 'class-validator';

@ArgsType()
export class SeachChallengeArgs {
  @Field((type) => String)
  @IsOptional()
  search?: string;

  @Field((type) => ProgrammingLang)
  @IsOptional()
  @IsIn(Object.values(ProgrammingLang))
  lang?: ProgrammingLang;

  @Field((type) => Int)
  @IsOptional()
  @IsNumber()
  @Min(1)
  page?: number;

  @Field((type) => Int)
  @IsOptional()
  @IsNumber()
  @Min(1)
  perPage?: number;
}
