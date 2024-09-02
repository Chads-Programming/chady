import { CurrentUser } from '@/features/auth/decorators/current-user';
import { SubmissionInput } from './../dtos/submission.input';
import { GraphQLAuthGuard } from '@/features/auth/guards/grahpql-auth.guard';
import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Resolver,
  Query,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { User } from '@/features/users/models/user.model';
import { SubmissionService } from '../services/submission.service';
import { Submission, SubmissionResult } from '../models/submission.model';
import { CodeChallenge } from '../models/code-challenge.model';

@UseGuards(GraphQLAuthGuard)
@Resolver(() => Submission)
export class SubmissionResolver {
  constructor(private readonly submissionService: SubmissionService) {}

  @Query(() => Submission)
  getUserSubmission(
    @CurrentUser() user: User,
    @Args('submissionId') submissionId: string,
  ) {
    return this.submissionService.findUserSubmissionById(user.id, submissionId);
  }

  @Query(() => [Submission])
  getUserSubmissions(@CurrentUser() user: User) {
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
    @CurrentUser() user: User,
    @Args('submission') submission: SubmissionInput,
  ) {
    return this.submissionService.createUserSubmission(user.id, submission);
  }

  @Mutation(() => SubmissionResult)
  updateUserSubmission(
    @CurrentUser() user: User,
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
