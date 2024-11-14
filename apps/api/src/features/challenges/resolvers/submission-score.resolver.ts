import discordUtils from '@/discord/utils';

import { GqlCurrentUser } from '@/auth/decorators/current-user';
import { GQLJwtAuthGuard } from '@/auth/guards/graphql-jwt-auth.guard';
import { UserScoreModel } from '@/challenges/models/user-score.model';
import { SubmissionScoreService } from '@/challenges/services/submission-score.service';
import { UserDetail } from '@/features/users/models/user-detail.model';
import { User } from '@/users/models/user.model';
import { UserService } from '@/users/services/user.service';
import { UseGuards } from '@nestjs/common';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { SearchSubmissionsArgs } from '../dtos/search-submissions.args';
import { SubmissionInfo } from '../models/submission-info.model';

@Resolver(() => UserScoreModel)
export class SubmissionScoreResolver {
  constructor(
    private readonly submissionScoreService: SubmissionScoreService,
    private readonly userService: UserService,
  ) {}

  @UseGuards(GQLJwtAuthGuard)
  @Query(() => Number)
  findPersonalScore(@GqlCurrentUser() user: User) {
    return this.submissionScoreService.findUserTotalScore(user.id);
  }

  @Query(() => [SubmissionInfo])
  getSubmissionsInfoByChallenge(
    @Args() { codeChallengeId }: SearchSubmissionsArgs,
  ) {
    return this.submissionScoreService.findSubmissionsInfoByChallenge(
      codeChallengeId,
    );
  }

  @Query(() => [UserScoreModel])
  findSubmissionsLeaderboard() {
    return this.submissionScoreService.findSubmissionsLeaderboard();
  }

  @ResolveField(() => UserDetail)
  async user(@Parent() userScore: UserScoreModel) {
    const user = await this.userService.findUserById(userScore.userId);

    return {
      ...user,
      avatarUrl: discordUtils.getAvatarUrl(user.discordId, user.avatar),
    };
  }
}
