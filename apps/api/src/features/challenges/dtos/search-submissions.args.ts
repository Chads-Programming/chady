import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class SearchSubmissionsArgs {
  @Field(() => String)
  codeChallengeId: string;
}
