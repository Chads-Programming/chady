/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query Profile {\n    findProfile {\n      id\n      username\n      avatarUrl\n      roles {\n        id\n        name\n        imageUrl\n        color\n      }\n    }\n  }\n": types.ProfileDocument,
    "\n    mutation RefreshToken{\n        refreshToken{\n          __typename\n        }\n    }\n  ": types.RefreshTokenDocument,
    "\n    query LeaderboardQuery {\n        findSubmissionsLeaderboard {\n            user {\n                id\n                avatarUrl\n                username\n            }\n            totalScore\n        }\n    }": types.LeaderboardQueryDocument,
    "\n    query GetUserSubmissionQuery($codeChallengeId: String!, $programmingLang: ProgrammingLang!){\n      getUserSubmission(codeChallengeId: $codeChallengeId, programmingLang: $programmingLang){\n        id\n        runtime\n        score\n        solutionCode\n        lang\n        status\n        createdAt\n        updatedAt\n      }\n    }\n  ": types.GetUserSubmissionQueryDocument,
    "\n    mutation SubmitSolution($submission: SubmissionInput!) {\n        submitUserSolution(submission: $submission ){\n              submission {\n                  id\n                  runtime\n                  score\n                  status\n                  createdAt\n                  updatedAt\n              }\n              inputResults {\n                  testCase {\n                      id\n                      args\n                      isSecret\n                      expectedOutput\n                  }\n                  isSuccess\n                  output\n                  executionTime\n                  timeFormat\n              }\n          }\n      }\n  ": types.SubmitSolutionDocument,
    "\n    query FindCodeChallengeById($id: String!){\n        getCodeChallenge(id: $id){\n            id\n            title\n            description\n            difficult\n            langDetails {\n                id\n                lang\n                startedCode\n            }\n            testCases {\n                id\n                args\n                expectedOutput\n                isSecret\n            }\n        }\n    }\n": types.FindCodeChallengeByIdDocument,
    "\n    query FindCodeChallengeInfoById($id: String!){\n        getCodeChallenge(id: $id){\n            id\n            title\n            difficult\n            langDetails {\n                id\n                lang\n            }\n        }\n    }\n": types.FindCodeChallengeInfoByIdDocument,
    "\n  query FindCodeChallnges($difficult: Difficult, $search: String, $perPage: Int, $page: Int, $lang: ProgrammingLang) {\n    findCodeChallenges(difficult: $difficult, search: $search, perPage: $perPage, page: $page, lang: $lang){\n        data {\n            id\n            title\n            description\n            difficult\n        }\n       pageInfo {\n        currentPage\n        totalPages\n        hasNextPage\n        hasNextPage\n      }\n    }\n  }\n": types.FindCodeChallngesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Profile {\n    findProfile {\n      id\n      username\n      avatarUrl\n      roles {\n        id\n        name\n        imageUrl\n        color\n      }\n    }\n  }\n"): typeof import('./graphql').ProfileDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation RefreshToken{\n        refreshToken{\n          __typename\n        }\n    }\n  "): typeof import('./graphql').RefreshTokenDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query LeaderboardQuery {\n        findSubmissionsLeaderboard {\n            user {\n                id\n                avatarUrl\n                username\n            }\n            totalScore\n        }\n    }"): typeof import('./graphql').LeaderboardQueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetUserSubmissionQuery($codeChallengeId: String!, $programmingLang: ProgrammingLang!){\n      getUserSubmission(codeChallengeId: $codeChallengeId, programmingLang: $programmingLang){\n        id\n        runtime\n        score\n        solutionCode\n        lang\n        status\n        createdAt\n        updatedAt\n      }\n    }\n  "): typeof import('./graphql').GetUserSubmissionQueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation SubmitSolution($submission: SubmissionInput!) {\n        submitUserSolution(submission: $submission ){\n              submission {\n                  id\n                  runtime\n                  score\n                  status\n                  createdAt\n                  updatedAt\n              }\n              inputResults {\n                  testCase {\n                      id\n                      args\n                      isSecret\n                      expectedOutput\n                  }\n                  isSuccess\n                  output\n                  executionTime\n                  timeFormat\n              }\n          }\n      }\n  "): typeof import('./graphql').SubmitSolutionDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query FindCodeChallengeById($id: String!){\n        getCodeChallenge(id: $id){\n            id\n            title\n            description\n            difficult\n            langDetails {\n                id\n                lang\n                startedCode\n            }\n            testCases {\n                id\n                args\n                expectedOutput\n                isSecret\n            }\n        }\n    }\n"): typeof import('./graphql').FindCodeChallengeByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query FindCodeChallengeInfoById($id: String!){\n        getCodeChallenge(id: $id){\n            id\n            title\n            difficult\n            langDetails {\n                id\n                lang\n            }\n        }\n    }\n"): typeof import('./graphql').FindCodeChallengeInfoByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FindCodeChallnges($difficult: Difficult, $search: String, $perPage: Int, $page: Int, $lang: ProgrammingLang) {\n    findCodeChallenges(difficult: $difficult, search: $search, perPage: $perPage, page: $page, lang: $lang){\n        data {\n            id\n            title\n            description\n            difficult\n        }\n       pageInfo {\n        currentPage\n        totalPages\n        hasNextPage\n        hasNextPage\n      }\n    }\n  }\n"): typeof import('./graphql').FindCodeChallngesDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
