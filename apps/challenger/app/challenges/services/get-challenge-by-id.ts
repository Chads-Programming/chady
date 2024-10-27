import { graphql } from '@/graphql'
import { execute } from '@/graphql/execute'
import type { QueryGetCodeChallengeArgs } from '@/graphql/graphql'

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

const ChallengeInfoTitleByIdQuery = graphql(`
    query FindCodeChallengeInfoById($id: String!){
        getCodeChallenge(id: $id){
            id
            title
            difficult
            langDetails {
                id
                lang
            }
        }
    }
`)

export const getChallengeById = (args: QueryGetCodeChallengeArgs) =>
  execute(ChallengeByIdQuery, args)

export const getChallengeInfoTitleById = (args: QueryGetCodeChallengeArgs) =>
  execute(ChallengeInfoTitleByIdQuery, args)
