import { Field, ObjectType } from '@nestjs/graphql';
import { Periodicity } from '@prisma/client';

@ObjectType()
export class EventSchedule {
  @Field(() => Date)
  uniqueDate: Date;

  @Field(() => Periodicity)
  periocity: Periodicity;

  @Field(() => Boolean)
  monday = false;

  @Field(() => Boolean)
  tuesday = false;

  @Field(() => Boolean)
  wednesday = false;

  @Field(() => Boolean)
  thursday = false;

  @Field(() => Boolean)
  friday = false;

  @Field(() => Boolean)
  saturday = false;

  @Field(() => Boolean)
  sunday = false;

  @Field(() => Date)
  startTime: Date;

  @Field(() => Date, { nullable: true })
  endTime?: Date;
}
