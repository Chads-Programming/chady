import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateCodeChallengeInput } from '../dtos/code-challenge.input';
import {
  CodeChallenge,
  PaginatedChallenges,
} from '../models/code-challenge.model';
import { ChallengeService } from '../services/challenge.service';
import { AllowedDiscordRoles } from '@/features/auth/decorators/discord-roles';
import { DISCORD_ROLES } from '@/features/auth/consts';
import { SeachChallengeArgs } from '../dtos/search-challenge.args';

@Resolver('CodeChallenge')
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

  @Query(() => CodeChallenge)
  getCodeChallenge(@Args('id') id: string) {
    return this.challengeService.findCodeChallengeById(id);
  }

  @Query(() => PaginatedChallenges)
  findCodeChallenges(@Args('searchQuery') query: SeachChallengeArgs) {
    return this.challengeService.findChallenges(query);
  }
}
