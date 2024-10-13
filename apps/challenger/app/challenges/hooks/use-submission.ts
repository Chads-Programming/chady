import { useAuth } from '@/app/auth/hooks/use-auth'
import type {
  CreateUserSubmissionMutation,
  ProgrammingLang,
  UpdateUserSubmissionMutation,
} from '@/graphql/graphql'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useCreateUserSubmissionMutation } from '../mutations/create-submission'
import { useUpdateUserSubmissionMutation } from '../mutations/update-submission'
import { useGetUserSubmissionQuery } from '../queries/get-user-submission'

interface TestCaseResult {
  testCaseId: number
  testResult: string
}

interface SubmissionStatus {
  runtime: number
  testResults: TestCaseResult[]
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
    mutate: createSubmission,
    isPending: isCreatingSubmission,
    isError: isCreatingSubmissionError,
  } = useCreateUserSubmissionMutation()
  const {
    mutate: updateSubmission,
    isPending: isUpdatingSubmission,
    isError: isUpdatingSubmissionError,
  } = useUpdateUserSubmissionMutation()

  const handleSubmissionSuccess = (
    mutationResponse:
      | UpdateUserSubmissionMutation['updateUserSubmission']
      | CreateUserSubmissionMutation['createUserSubmission'],
  ) => {
    void queryClient.invalidateQueries({
      queryKey: [['user-submission', challengeId]],
    })

    const { inputResults, submission } = mutationResponse

    const testCases = inputResults.map((inputResult) => ({
      testCaseId: inputResult.testCase.id,
      testResult: inputResult.output,
    })) as TestCaseResult[]

    setSubmissionStatus({
      runtime: submission.runtime,
      testResults: testCases,
    })
  }

  const submitSolution = (solutionCode: string) => {
    if (data?.userSubmission) {
      updateSubmission(
        {
          submissionId: data.userSubmission.id,
          submission: {
            challengeId,
            lang: programmingLang,
            solutionCode,
          },
        },
        {
          onSuccess: (response) =>
            handleSubmissionSuccess(response.updateUserSubmission),
        },
      )

      return
    }

    createSubmission(
      {
        challengeId,
        lang: programmingLang,
        solutionCode,
      },
      {
        onSuccess: (response) =>
          handleSubmissionSuccess(response.createUserSubmission),
      },
    )
  }

  return {
    submissionStatus,
    submission: data?.userSubmission,
    submitSolution,
    isLoadingSubmission: isCreatingSubmission || isUpdatingSubmission,
    isSubmissionError: isCreatingSubmissionError || isUpdatingSubmissionError,
  }
}
