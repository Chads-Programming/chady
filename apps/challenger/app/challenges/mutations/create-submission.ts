import { graphql } from '@/graphql'
import { execute } from '@/graphql/execute'
import type { SubmissionInput } from '@/graphql/graphql'
import { useMutation } from '@tanstack/react-query'

const CreateUserSubmissionMutation = graphql(`
    mutation CreateUserSubmission($submission: SubmissionInput!) {
        createUserSubmission(submission: $submission ){
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

export const useCreateUserSubmissionMutation = () =>
  useMutation({
    mutationKey: ['create-user-submission'],
    mutationFn: (args: SubmissionInput) =>
      execute(CreateUserSubmissionMutation, {
        submission: args,
      }),
  })
