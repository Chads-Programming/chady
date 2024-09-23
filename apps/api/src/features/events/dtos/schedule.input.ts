import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Periodicity } from '@prisma/client';
import { IsBoolean, IsOptional } from 'class-validator';

@InputType()
export class CreateEventScheduleInput {
  @Field(() => Date)
  uniqueDate: Date;

  @Field(() => Periodicity)
  periocity: Periodicity;

  @Field(() => Boolean, { defaultValue: false })
  @IsBoolean()
  monday = false;

  @Field(() => Boolean, { defaultValue: false })
  @IsBoolean()
  tuesday = false;

  @Field(() => Boolean, { defaultValue: false })
  @IsBoolean()
  wednesday = false;

  @Field(() => Boolean, { defaultValue: false })
  @IsBoolean()
  thursday = false;

  @Field(() => Boolean, { defaultValue: false })
  @IsBoolean()
  friday = false;

  @Field(() => Boolean, { defaultValue: false })
  @IsBoolean()
  saturday = false;

  @Field(() => Boolean, { defaultValue: false })
  @IsBoolean()
  sunday = false;

  @Field(() => Date)
  startTime: Date;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  endTime?: Date;
}

@InputType()
export class UpdateEventScheduleInput extends PartialType(
  CreateEventScheduleInput,
) {}
