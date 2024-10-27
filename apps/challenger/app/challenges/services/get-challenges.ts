import { graphql } from '@/graphql'
import { execute } from '@/graphql/execute'
import type { QueryFindCodeChallengesArgs } from '@/graphql/graphql'

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

export const getChallenges = (args: QueryFindCodeChallengesArgs) =>
  execute(ChallengesQuery, args)
