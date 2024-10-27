'use client'

import type { QueryGetCodeChallengeArgs } from '@/graphql/graphql'
import { useQuery } from '@tanstack/react-query'
import { getChallengeById } from '../services/get-challenge-by-id'

export const useGetCodeChallengeByIdQuery = (args: QueryGetCodeChallengeArgs) =>
  useQuery({
    queryKey: ['code-challenge', args],
    queryFn: () => getChallengeById(args),
    select: (data) => ({
      ...data.getCodeChallenge,
    }),
  })
