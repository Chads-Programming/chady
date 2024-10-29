'use client'

import { graphql } from '@/graphql'
import { execute } from '@/graphql/execute'
import { useMutation } from '@tanstack/react-query'

const RefreshTokenMutation = graphql(`
    mutation RefreshToken{
        refreshToken{
          __typename
        }
    }
  `)

export const useRefreshTokenMutation = () => {
  return useMutation({
    mutationKey: ['refresh-jwt'],
    mutationFn: () => execute(RefreshTokenMutation),
  })
}
