import { Field, ObjectType } from '@nestjs/graphql';
import { Periodicity } from '@prisma/client';

@ObjectType()
export class EventSchedule {
  @Field(() => Date)
  uniqueDate: Date;

  @Field(() => Periodicity)
  periocity: Periodicity;

  @Field(() => Boolean)
  monday: boolean = false;

  @Field(() => Boolean)
  tuesday: boolean = false;

  @Field(() => Boolean)
  wednesday: boolean = false;

  @Field(() => Boolean)
  thursday: boolean = false;

  @Field(() => Boolean)
  friday: boolean = false;

  @Field(() => Boolean)
  saturday: boolean = false;

  @Field(() => Boolean)
  sunday: boolean = false;

  @Field(() => Date)
  startTime: Date;

  @Field(() => Date, { nullable: true })
  endTime?: Date;
}
