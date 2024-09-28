'use client'

import { graphql } from '@/graphql'
import { execute } from '@/graphql/execute'
import type { PageInfo, QueryFindCodeChallengesArgs } from '@/graphql/graphql'
import { useQuery } from '@tanstack/react-query'

const ChallengesQuery = graphql(`
  query FindCodeChallnges($difficult: Difficult, $search: String, $perPage: Int, $page: Int, $lang: ProgrammingLang) {
    findCodeChallenges(difficult: $difficult, search: $search, perPage: $perPage, page: $page, lang: $lang){
        data {
            id
            title
            description
            difficult
        }
       pageInfo {
        currentPage
        totalPages
        hasNextPage
        hasNextPage
      }
    }
  }
`)

const defaultPageInfo: PageInfo = {
  hasNextPage: false,
  currentPage: 0,
  total: 0,
  totalPages: 0,
}

export const useGetCodeChallengesQuery = (args: QueryFindCodeChallengesArgs) =>
  useQuery({
    queryKey: ['challenges', args],
    queryFn: () => execute(ChallengesQuery, args),
    select: (data) => ({
      challenges: data?.findCodeChallenges?.data ?? [],
      pageInfo: data?.findCodeChallenges?.pageInfo ?? defaultPageInfo,
    }),
  })
