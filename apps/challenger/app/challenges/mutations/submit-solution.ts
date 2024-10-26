import { graphql } from '@/graphql'
import { execute } from '@/graphql/execute'
import type { SubmissionInput } from '@/graphql/graphql'
import { useMutation } from '@tanstack/react-query'

const SubmitSolutionMutation = graphql(`
    mutation SubmitSolution($submission: SubmissionInput!) {
        submitUserSolution(submission: $submission ){
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
                      args
                      isSecret
                      expectedOutput
                  }
                  isSuccess
                  output
                  executionTime
                  timeFormat
              }
          }
      }
  `)

export const useSubmitSolutionMutation = () =>
  useMutation({
    mutationKey: ['submit-solution'],
    mutationFn: (args: SubmissionInput) =>
      execute(SubmitSolutionMutation, {
        submission: args,
      }),
  })
