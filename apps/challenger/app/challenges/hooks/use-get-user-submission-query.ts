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

interface SubmissionQueryArgs {
  codeChallengeId: string
  programmingLang: ProgrammingLang
  isLogged: boolean
}

export const useGetUserSubmissionQuery = ({
  codeChallengeId,
  programmingLang,
  isLogged,
}: SubmissionQueryArgs) =>
  useQuery({
    queryKey: ['user-submission', codeChallengeId],
    queryFn: () =>
      execute(GetUserSubmissionQuery, {
        codeChallengeId,
        programmingLang,
      }),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    enabled: isLogged,
    select: (data) => ({
      userSubmission: data.getUserSubmission,
    }),
  })
