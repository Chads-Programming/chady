import { graphql } from '@/graphql'
import { execute } from '@/graphql/execute'
import type { SubmissionInput } from '@/graphql/graphql'
import { useMutation } from '@tanstack/react-query'

const UpdateUserSubmissionMutation = graphql(`
    mutation UpdateUserSubmission($submissionId: String!, $submission: SubmissionInput!) {
        updateUserSubmission(submissionId: $submissionId, submission: $submission ){
              submission {
                  id
                  runtime
                  score
                  status
                  createdAt
                  updatedAt
              }
              inputResults {
                  testCase {
                      id
                  }
                  isSuccess
                  output
                  executionTime
                  timeFormat
              }
          }
      }
  `)

export const useUpdateUserSubmissionMutation = () =>
  useMutation({
    mutationKey: ['update-user-submission'],
    mutationFn: ({
      submissionId,
      submission,
    }: { submissionId: string; submission: SubmissionInput }) =>
      execute(UpdateUserSubmissionMutation, {
        submissionId,
        submission,
      }),
  })
