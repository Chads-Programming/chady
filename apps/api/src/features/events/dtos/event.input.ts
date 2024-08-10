import {
  Field,
  InputType,
  PartialType,
  registerEnumType,
} from '@nestjs/graphql';
import { EventType, Periodicity, Status } from '@prisma/client';
import {
  IsIn,
  IsString,
  IsUrl,
  IsUUID,
  Length,
  MaxLength,
} from 'class-validator';

registerEnumType(EventType, {
  name: 'EventType',
});

registerEnumType(Periodicity, {
  name: 'Periodicity',
});

registerEnumType(Status, {
  name: 'Status',
});

@InputType()
export class CreateEventInput {
  @Field()
  @MaxLength(30)
  name: string;

  @Field({ nullable: true })
  @Length(10, 255)
  description: string;

  @Field((type) => String)
  @IsUrl()
  link: string;

  @Field((type) => EventType)
  @IsIn(Object.values(EventType))
  type: EventType;
}

@InputType()
export class UpdateEventInput extends PartialType(CreateEventInput) {
  @Field((type) => String)
  @IsString()
  @IsUUID()
  id: string;

  @Field((type) => Status)
  @IsIn(Object.values(EventType))
  status: Status;
}
