import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { IsIn, IsNumber, IsOptional, Min } from 'class-validator';

@ArgsType()
export class EventArgs {
  @Field((type) => String)
  @IsOptional()
  search?: string;

  @Field((type) => Status)
  @IsOptional()
  @IsIn(Object.values(Status))
  status?: Status;

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
