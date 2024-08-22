import { CreateTestCaseInput } from './../dtos/test-case.input';
import {
  Args,
  Mutation,
  Resolver,
  Query,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { CreateCodeChallengeInput } from '../dtos/code-challenge.input';
import {
  CodeChallenge,
  PaginatedChallenges,
} from '../models/code-challenge.model';
import { ChallengeService } from '../services/challenge.service';
import { AllowedDiscordRoles } from '@/features/auth/decorators/discord-roles';
import { DISCORD_ROLES } from '@/features/auth/consts';
import { SeachChallengeArgs } from '../dtos/search-challenge.args';
import { paginate } from '@/common/utils/paginate';
import { TestCase } from '../models/test-case.model';

@Resolver(() => CodeChallenge)
export class CodeChallengeResolver {
  constructor(private readonly challengeService: ChallengeService) {}

  @AllowedDiscordRoles(
    DISCORD_ROLES.GIGA_CHAD,
    DISCORD_ROLES.LEGACY_ADMIN,
    DISCORD_ROLES.ULTRA_CHAD,
  )
  @Mutation(() => CodeChallenge)
  createCodeChallenge(
    @Args('newCodeChallenge') newCodeChallenge: CreateCodeChallengeInput,
  ) {
    return this.challengeService.createChallenge(newCodeChallenge);
  }

  @AllowedDiscordRoles(
    DISCORD_ROLES.GIGA_CHAD,
    DISCORD_ROLES.LEGACY_ADMIN,
    DISCORD_ROLES.ULTRA_CHAD,
  )
  @Mutation(() => CodeChallenge)
  createTestCase(@Args('testCase') testCase: CreateTestCaseInput) {
    return this.challengeService.createTestCase(testCase);
  }

  @Query(() => CodeChallenge)
  getCodeChallenge(@Args('id') id: string) {
    return this.challengeService.findCodeChallengeById(id);
  }

  @Query(() => PaginatedChallenges)
  async findCodeChallenges(@Args() query: SeachChallengeArgs) {
    const response = await this.challengeService.findChallenges(query);

    return paginate(response);
  }

  @ResolveField(() => [TestCase])
  testCases(@Parent() codeChallenge: CodeChallenge) {
    return this.challengeService.findCodeChallengeTestCases(codeChallenge.id);
  }
}