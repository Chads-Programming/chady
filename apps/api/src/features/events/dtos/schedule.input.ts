import { InputType, Field, PartialType, Int } from '@nestjs/graphql';
import { Periodicity } from '@prisma/client';
import { IsBoolean, IsNumber, IsOptional, IsUUID, Min } from 'class-validator';

@InputType()
export class CreateEventScheduleInput {
  @Field(() => Date)
  uniqueDate: Date;

  @Field(() => Periodicity)
  periocity: Periodicity;

  @Field(() => Boolean, { defaultValue: false })
  @IsBoolean()
  monday: boolean = false;

  @Field(() => Boolean, { defaultValue: false })
  @IsBoolean()
  tuesday: boolean = false;

  @Field(() => Boolean, { defaultValue: false })
  @IsBoolean()
  wednesday: boolean = false;

  @Field(() => Boolean, { defaultValue: false })
  @IsBoolean()
  thursday: boolean = false;

  @Field(() => Boolean, { defaultValue: false })
  @IsBoolean()
  friday: boolean = false;

  @Field(() => Boolean, { defaultValue: false })
  @IsBoolean()
  saturday: boolean = false;

  @Field(() => Boolean, { defaultValue: false })
  @IsBoolean()
  sunday: boolean = false;

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
