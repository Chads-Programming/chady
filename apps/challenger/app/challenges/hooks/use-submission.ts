import { useAuth } from '@/app/auth/hooks/use-auth'
import type { ProgrammingLang } from '@/graphql/graphql'
import { useGetUserSubmissionQuery } from '../queries/get-user-submission'

// interface TestCaseStatus {
//   testCaseId: string
//   testResult: string
// }

// interface SubmissionStatus {
//   runtime: number
//   timeFormat: number
// }

interface SubmissionArgs {
  challengeId: string
  programmingLang: ProgrammingLang
}

export const useSubmission = ({
  challengeId,
  programmingLang,
}: SubmissionArgs) => {
  const { profile } = useAuth()
  const { data } = useGetUserSubmissionQuery({
    codeChallengeId: challengeId,
    programmingLang,
    isLogged: Boolean(profile),
  })

  // const [createSubmission] = useCreateUserSubmissionMutation()
  // const [updateSubmission] = useUpdateUserSubmissionMutation()

  const submitSolution = () => {}

  return {
    submission: data?.userSubmission,
    submitSolution,
  }
}
