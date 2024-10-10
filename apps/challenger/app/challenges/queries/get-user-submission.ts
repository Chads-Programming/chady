import { graphql } from '@/graphql'
import { execute } from '@/graphql/execute'
import type { ProgrammingLang } from '@/graphql/graphql'
import { useQuery } from '@tanstack/react-query'

const GetUserSubmissionQuery = graphql(`
    query GetUserSubmissionQuery($codeChallengeId: String!, $programmingLang: ProgrammingLang!){
      getUserSubmission(codeChallengeId: $codeChallengeId, programmingLang: $programmingLang){
        id
        runtime
        score
        solutionCode
        lang
        status
        createdAt
        updatedAt
      }
    }
  `)

export const useGetUserSubmissionQuery = (
  codeChallengeId: string,
  programmingLang: ProgrammingLang,
) =>
  useQuery({
    queryKey: ['user-submission', codeChallengeId],
    queryFn: () =>
      execute(GetUserSubmissionQuery, {
        codeChallengeId,
        programmingLang,
      }),
    select: (data) => ({
      userSubmission: data.getUserSubmission,
    }),
  })
