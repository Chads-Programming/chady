'use client'

import type { PageInfo, QueryFindCodeChallengesArgs } from '@/graphql/graphql'
import { useQuery } from '@tanstack/react-query'
import { getChallenges } from '../services/get-challenges'

const defaultPageInfo: PageInfo = {
  hasNextPage: false,
  currentPage: 0,
  total: 0,
  totalPages: 0,
}

export const useGetCodeChallengesQuery = (args: QueryFindCodeChallengesArgs) =>
  useQuery({
    queryKey: ['challenges', args],
    queryFn: () => getChallenges(args),
    select: (data) => ({
      challenges: data?.findCodeChallenges?.data ?? [],
      pageInfo: data?.findCodeChallenges?.pageInfo ?? defaultPageInfo,
    }),
  })
