import { graphql } from '@/graphql'
import { execute } from '@/graphql/execute'
import type { QueryGetSubmissionsInfoByChallengeArgs } from '@/graphql/graphql'

const SubmissionInfoQuery = graphql(`
  query FindSubmissionInfoByChallenge($codeChallengeId: String!) {
    getSubmissionsInfoByChallenge(codeChallengeId: $codeChallengeId){
      lang
      runtime
      createdAt
      updatedAt
        user {
            id
            username
        }
    }
  }
`)

export const getSolutionsInfoByChallenge = (
  args: QueryGetSubmissionsInfoByChallengeArgs,
) => execute(SubmissionInfoQuery, args)
