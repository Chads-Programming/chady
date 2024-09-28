import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Difficult, ProgrammingLang } from '@prisma/client';
import { IsIn, IsNumber, IsOptional, Min } from 'class-validator';

@ArgsType()
export class SeachChallengeArgs {
  @Field((type) => String, { nullable: true })
  @IsOptional()
  search?: string;

  @Field((type) => ProgrammingLang, { nullable: true })
  @IsOptional()
  @IsIn(Object.values(ProgrammingLang))
  lang?: ProgrammingLang;

  @Field((type) => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  @Min(1)
  page?: number;

  @Field((type) => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  @Min(1)
  perPage?: number;

  @IsOptional()
  @Field((type) => Difficult, { nullable: true })
  @IsIn(Object.values(Difficult))
  difficult?: Difficult;
}
