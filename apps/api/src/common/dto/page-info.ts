import { Type, mixin } from '@nestjs/common';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PageInfo {
  @Field(() => Number)
  currentPage: number;

  @Field(() => Number)
  totalPages: number;

  @Field(() => Number)
  total: number;

  @Field()
  hasNextPage: boolean;
}

export interface PlainPagination<Data> extends PageInfo {
  data: Data[];
}

export abstract class AbtractPaginated<T> {
  data: T[];
  pageInfo: PageInfo;
}

export function Paginated<T>(classRef: Type<T>): Type<AbtractPaginated<T>> {
  @ObjectType(`${classRef.name}Edge`, { isAbstract: true })
  class PaginatedType extends AbtractPaginated<T> {
    @Field(() => [classRef])
    data: T[];

    @Field(() => PageInfo, { nullable: true })
    pageInfo: PageInfo;
  }
  return mixin(PaginatedType);
}
