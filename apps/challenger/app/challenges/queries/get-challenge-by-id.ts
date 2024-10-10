'use client'

import { graphql } from '@/graphql'
import { execute } from '@/graphql/execute'
import type { QueryGetCodeChallengeArgs } from '@/graphql/graphql'
import { useQuery } from '@tanstack/react-query'

const ChallengeByIdQuery = graphql(`
    query FindCodeChallengeById($id: String!){
        getCodeChallenge(id: $id){
            id
            title
            description
            difficult
            langDetails {
                id
                lang
                startedCode
            }
            testCases {
                id
                args
                expectedOutput
                isSecret
            }
        }
    }
`)

export const useGetCodeChallengeByIdQuery = (args: QueryGetCodeChallengeArgs) =>
  useQuery({
    queryKey: ['code-challenge', args],
    queryFn: () => execute(ChallengeByIdQuery, args),
    select: (data) => ({
      ...data.getCodeChallenge,
    }),
  })
