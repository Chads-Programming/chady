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
import { CodeChallenge } from '../models/code-challenge.model';
import { Submission, SubmissionResult } from '../models/submission.model';
import { SubmissionService } from '../services/submission.service';
import { SubmissionInput } from './../dtos/submission.input';

@UseGuards(GQLJwtAuthGuard)
@Resolver(() => Submission)
export class SubmissionResolver {
  constructor(private readonly submissionService: SubmissionService) {}

  @Query(() => Submission)
  getUserSubmission(
    @GqlCurrentUser() user: User,
    @Args('submissionId') submissionId: string,
  ) {
    return this.submissionService.findUserSubmissionById(user.id, submissionId);
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
  createUserSubmission(
    @GqlCurrentUser() user: User,
    @Args('submission') submission: SubmissionInput,
  ) {
    return this.submissionService.createUserSubmission(user.id, submission);
  }

  @Mutation(() => SubmissionResult)
  updateUserSubmission(
    @GqlCurrentUser() user: User,
    @Args('submissionId') submissionId: string,
    @Args('submission') submission: SubmissionInput,
  ) {
    return this.submissionService.updateUserSubmission(
      submissionId,
      user.id,
      submission,
    );
  }
}
