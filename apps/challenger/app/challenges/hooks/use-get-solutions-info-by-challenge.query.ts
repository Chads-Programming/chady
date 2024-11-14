import type { QueryGetSubmissionsInfoByChallengeArgs } from '@/graphql/graphql'
import { useQuery } from '@tanstack/react-query'
import { getSolutionsInfoByChallenge } from '../services/get-solutions-info-by-challenge'

export const useGetSolutionsInfoByChallengesQuery = (
  args: QueryGetSubmissionsInfoByChallengeArgs,
) =>
  useQuery({
    queryKey: ['solutions-info', args],
    queryFn: () => getSolutionsInfoByChallenge(args),
    select: (data) => ({
      solutions: data.getSubmissionsInfoByChallenge ?? [],
    }),
  })
