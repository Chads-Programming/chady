import { UserScoreModel } from '@/challenges/models/user-score.model';
import { SubmissionScoreService } from '@/challenges/services/submission-score.service';
import { User } from '@/users/models/user.model';
import { UserService } from '@/users/services/user.service';
import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

@Resolver(() => UserScoreModel)
export class SubmissionScoreResolver {
  constructor(
    private readonly submissionScoreService: SubmissionScoreService,
    private readonly userService: UserService,
  ) {}

  @Query(() => [UserScoreModel])
  findSubmissionsLeaderboard() {
    return this.submissionScoreService.findSubmissionsLeaderboard();
  }

  @ResolveField(() => User)
  user(@Parent() userScore: UserScoreModel) {
    return this.userService.findUserById(userScore.userId);
  }
}
