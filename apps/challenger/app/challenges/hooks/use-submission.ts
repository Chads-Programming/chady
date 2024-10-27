import { useAuth } from '@/app/auth/hooks/use-auth'
import type {
  InputExecutionResult,
  ProgrammingLang,
  SubmitSolutionMutation,
} from '@/graphql/graphql'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useSubmitSolutionMutation } from '../mutations/submit-solution'
import { useGetUserSubmissionQuery } from '../queries/get-user-submission'

interface SubmissionStatus {
  runtime: number
  testResults: InputExecutionResult[]
}

interface SubmissionArgs {
  challengeId: string
  programmingLang: ProgrammingLang
}

export const useSubmission = ({
  challengeId,
  programmingLang,
}: SubmissionArgs) => {
  const queryClient = useQueryClient()
  const { profile } = useAuth()
  const { data } = useGetUserSubmissionQuery({
    codeChallengeId: challengeId,
    programmingLang,
    isLogged: Boolean(profile),
  })

  const [submissionStatus, setSubmissionStatus] = useState<
    SubmissionStatus | undefined
  >(undefined)

  const {
    mutate: submit,
    isPending: isLoadingSubmission,
    isError: isSubmissionError,
  } = useSubmitSolutionMutation()

  const handleSubmissionSuccess = (
    mutationResponse: SubmitSolutionMutation['submitUserSolution'],
  ) => {
    void queryClient.invalidateQueries({
      queryKey: [['user-submission', challengeId]],
    })

    const { inputResults, submission } = mutationResponse

    setSubmissionStatus({
      runtime: submission.runtime,
      testResults: inputResults,
    })
  }

  const submitSolution = (solutionCode: string) => {
    submit(
      {
        challengeId,
        lang: programmingLang,
        solutionCode,
      },
      {
        onSuccess: (response) =>
          handleSubmissionSuccess(response.submitUserSolution),
      },
    )
  }

  return {
    submissionStatus,
    submission: data?.userSubmission,
    submitSolution,
    isLoadingSubmission,
    isSubmissionError,
  }
}
