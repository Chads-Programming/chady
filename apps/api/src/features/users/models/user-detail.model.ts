import { Field, ObjectType, OmitType } from '@nestjs/graphql';
import { RoleDetail } from './role-detail.model';
import { User } from './user.model';

@ObjectType()
export class UserDetail extends OmitType(User, ['roles']) {
  @Field()
  avatarUrl: string;

  @Field(() => [RoleDetail])
  roles: RoleDetail[];

  avatar: string;
  rolesIds: string[];
}
