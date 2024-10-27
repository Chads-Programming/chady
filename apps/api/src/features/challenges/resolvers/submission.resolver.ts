import { GqlCurrentUser } from '@/features/auth/decorators/current-user';
import { GQLJwtAuthGuard } from '@/features/auth/guards/graphql-jwt-auth.guard';
import { User } from '@/features/users/models/user.model';
import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { SearchUserSubmissionArgs } from '../dtos/search-user-submission.args';
import { CodeChallenge } from '../models/code-challenge.model';
import { SubmissionResult } from '../models/submission-result.model';
import { Submission } from '../models/submission.model';
import { SubmissionService } from '../services/submission.service';
import { SubmissionInput } from './../dtos/submission.input';

@UseGuards(GQLJwtAuthGuard)
@Resolver(() => Submission)
export class SubmissionResolver {
  constructor(private readonly submissionService: SubmissionService) {}

  @Query(() => Submission)
  getUserSubmission(
    @GqlCurrentUser() user: User,
    @Args() { codeChallengeId, programmingLang }: SearchUserSubmissionArgs,
  ) {
    return this.submissionService.findUserSubmission({
      userId: user.id,
      codeChallengeId,
      programmingLang,
    });
  }

  @Query(() => [Submission])
  getUserSubmissions(@GqlCurrentUser() user: User) {
    return this.submissionService.findUserSubmissions(user.id);
  }

  @ResolveField(() => CodeChallenge)
  codeChallenge(@Parent() submission: Submission) {
    return this.submissionService.findSubmissionCodeChallengeById(
      submission.id,
    );
  }

  @Mutation(() => SubmissionResult)
  submitUserSolution(
    @GqlCurrentUser() user: User,
    @Args('submission') submission: SubmissionInput,
  ) {
    return this.submissionService.submitUserSolution(user.id, submission);
  }
}
