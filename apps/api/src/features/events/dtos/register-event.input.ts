import { IsUUIDArray } from '@/common/decorators/is-uuid';
import { Field, InputType } from '@nestjs/graphql';
import { ValidateNested } from 'class-validator';
import { CreateEventInput } from './event.input';
import { CreateEventScheduleInput } from './schedule.input';

@InputType()
export class RegisterEventInput {
  @Field(() => CreateEventInput)
  @ValidateNested()
  event: CreateEventInput;

  @Field(() => CreateEventScheduleInput)
  @ValidateNested()
  schedule: CreateEventScheduleInput;

  @Field(() => [String])
  @IsUUIDArray()
  creators: string;
}
