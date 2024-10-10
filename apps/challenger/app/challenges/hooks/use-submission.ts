import { type CodeChallenge, ProgrammingLang } from '@/graphql/graphql'
import { useEffect, useState } from 'react'
import { useGetUserSubmissionQuery } from '../queries/get-user-submission'

// interface TestCaseStatus {
//   testCaseId: string
//   testResult: string
// }

// interface SubmissionStatus {
//   runtime: number
//   timeFormat: number
// }

export const useSubmission = (challenge: CodeChallenge) => {
  const [currentSolutionCode, setCurrentSolutionCode] = useState('')
  const [currentProgrammingLang, setCurrentProgramminLang] =
    useState<ProgrammingLang>(ProgrammingLang.Javascript)

  const { data } = useGetUserSubmissionQuery(
    challenge.id,
    currentProgrammingLang,
  )
  // const [createSubmission] = useCreateUserSubmissionMutation()
  // const [updateSubmission] = useUpdateUserSubmissionMutation()

  useEffect(() => {
    if (!challenge) {
      return
    }

    if (!data) {
      const defaultCode = challenge.langDetails[0]?.startedCode ?? ''

      setCurrentSolutionCode(defaultCode)

      return
    }

    const { userSubmission } = data

    setCurrentSolutionCode(userSubmission.solutionCode)
    setCurrentProgramminLang(userSubmission.lang)
  }, [data, challenge])

  const submitSolution = () => {}

  return {
    currentSolutionCode,
    submitSolution,
  }
}
