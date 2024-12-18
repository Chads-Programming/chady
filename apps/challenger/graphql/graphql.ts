/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type CodeChallenge = {
  __typename?: 'CodeChallenge';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  difficult: Difficult;
  id: Scalars['String']['output'];
  langDetails: Array<CodeLangChallengeDetail>;
  startedCode: Scalars['String']['output'];
  testCases: Array<TestCaseModel>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CodeLangChallengeDetail = {
  __typename?: 'CodeLangChallengeDetail';
  codeChallengeId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  lang: ProgrammingLang;
  mainCode: Scalars['String']['output'];
  startedCode: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateCodeChallengeInput = {
  description: Scalars['String']['input'];
  difficult: Difficult;
  title: Scalars['String']['input'];
};

export type CreateTestCaseInput = {
  args: Scalars['String']['input'];
  codeChallengeId: Scalars['String']['input'];
  expectedOutput: Scalars['String']['input'];
  isSecret: Scalars['Boolean']['input'];
};

export enum Difficult {
  Easy = 'Easy',
  Hard = 'Hard',
  Medium = 'Medium'
}

export type InputExecutionResult = {
  __typename?: 'InputExecutionResult';
  executionTime: Scalars['Float']['output'];
  isSuccess: Scalars['Boolean']['output'];
  output: Scalars['String']['output'];
  testCase: TestCaseModel;
  timeFormat: Scalars['String']['output'];
};

export type JwtModel = {
  __typename?: 'JwtModel';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCodeChallenge: CodeChallenge;
  createTestCase: CodeChallenge;
  refreshToken: JwtModel;
  submitUserSolution: SubmissionResult;
};


export type MutationCreateCodeChallengeArgs = {
  newCodeChallenge: CreateCodeChallengeInput;
};


export type MutationCreateTestCaseArgs = {
  testCase: CreateTestCaseInput;
};


export type MutationSubmitUserSolutionArgs = {
  submission: SubmissionInput;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Float']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  total: Scalars['Float']['output'];
  totalPages: Scalars['Float']['output'];
};

export type PaginatedChallenges = {
  __typename?: 'PaginatedChallenges';
  data: Array<CodeChallenge>;
  pageInfo?: Maybe<PageInfo>;
};

export enum ProgrammingLang {
  Javascript = 'Javascript',
  Python = 'Python',
  Typescript = 'Typescript'
}

export type Query = {
  __typename?: 'Query';
  findCodeChallenges: PaginatedChallenges;
  findPersonalScore: Scalars['Float']['output'];
  findProfile: UserDetail;
  findSubmissionsLeaderboard: Array<UserScoreModel>;
  getCodeChallenge: CodeChallenge;
  getScore: Scalars['Int']['output'];
  getSubmissionsInfoByChallenge: Array<SubmissionInfo>;
  getUserSubmission: Submission;
  getUserSubmissions: Array<Submission>;
};


export type QueryFindCodeChallengesArgs = {
  difficult?: InputMaybe<Difficult>;
  lang?: InputMaybe<ProgrammingLang>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetCodeChallengeArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetSubmissionsInfoByChallengeArgs = {
  codeChallengeId: Scalars['String']['input'];
};


export type QueryGetUserSubmissionArgs = {
  codeChallengeId: Scalars['String']['input'];
  programmingLang: ProgrammingLang;
};

export type RegisteredSubmission = {
  __typename?: 'RegisteredSubmission';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  lang: ProgrammingLang;
  runtime: Scalars['Float']['output'];
  score: Scalars['Float']['output'];
  solutionCode: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type RoleDetail = {
  __typename?: 'RoleDetail';
  color: Scalars['Float']['output'];
  id: Scalars['String']['output'];
  imageUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type SimpleUser = {
  __typename?: 'SimpleUser';
  discordId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type Submission = {
  __typename?: 'Submission';
  codeChallenge: CodeChallenge;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  lang: ProgrammingLang;
  runtime: Scalars['Float']['output'];
  score: Scalars['Float']['output'];
  solutionCode: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UserDetail;
};

export type SubmissionInfo = {
  __typename?: 'SubmissionInfo';
  createdAt: Scalars['DateTime']['output'];
  lang: ProgrammingLang;
  runtime: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: SimpleUser;
};

export type SubmissionInput = {
  challengeId: Scalars['String']['input'];
  lang: ProgrammingLang;
  solutionCode: Scalars['String']['input'];
};

export type SubmissionResult = {
  __typename?: 'SubmissionResult';
  inputResults: Array<InputExecutionResult>;
  status: SubmissionStatus;
  submission: RegisteredSubmission;
};

export enum SubmissionStatus {
  Failed = 'Failed',
  Pending = 'Pending',
  Success = 'Success'
}

export type TestCaseModel = {
  __typename?: 'TestCaseModel';
  args: Scalars['String']['output'];
  expectedOutput: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  isSecret: Scalars['Boolean']['output'];
};

export type UserDetail = {
  __typename?: 'UserDetail';
  avatar: Scalars['String']['output'];
  avatarUrl: Scalars['String']['output'];
  discordId: Scalars['String']['output'];
  discriminator: Scalars['String']['output'];
  id: Scalars['String']['output'];
  roles: Array<RoleDetail>;
  username: Scalars['String']['output'];
};

export type UserScoreModel = {
  __typename?: 'UserScoreModel';
  totalScore: Scalars['Float']['output'];
  user: UserDetail;
  userId: Scalars['String']['output'];
};

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', getScore: number, findProfile: { __typename?: 'UserDetail', id: string, username: string, avatarUrl: string, roles: Array<{ __typename?: 'RoleDetail', id: string, name: string, imageUrl: string, color: number }> } };

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename: 'JwtModel' } };

export type LeaderboardQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type LeaderboardQueryQuery = { __typename?: 'Query', findSubmissionsLeaderboard: Array<{ __typename?: 'UserScoreModel', totalScore: number, user: { __typename?: 'UserDetail', id: string, avatarUrl: string, username: string } }> };

export type GetUserSubmissionQueryQueryVariables = Exact<{
  codeChallengeId: Scalars['String']['input'];
  programmingLang: ProgrammingLang;
}>;


export type GetUserSubmissionQueryQuery = { __typename?: 'Query', getUserSubmission: { __typename?: 'Submission', id: string, runtime: number, score: number, solutionCode: string, lang: ProgrammingLang, status: string, createdAt: any, updatedAt: any } };

export type SubmitSolutionMutationVariables = Exact<{
  submission: SubmissionInput;
}>;


export type SubmitSolutionMutation = { __typename?: 'Mutation', submitUserSolution: { __typename?: 'SubmissionResult', submission: { __typename?: 'RegisteredSubmission', id: string, runtime: number, score: number, status: string, createdAt: any, updatedAt: any }, inputResults: Array<{ __typename?: 'InputExecutionResult', isSuccess: boolean, output: string, executionTime: number, timeFormat: string, testCase: { __typename?: 'TestCaseModel', id: number, args: string, isSecret: boolean, expectedOutput: string } }> } };

export type FindCodeChallengeByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type FindCodeChallengeByIdQuery = { __typename?: 'Query', getCodeChallenge: { __typename?: 'CodeChallenge', id: string, title: string, description: string, difficult: Difficult, langDetails: Array<{ __typename?: 'CodeLangChallengeDetail', id: number, lang: ProgrammingLang, startedCode: string }>, testCases: Array<{ __typename?: 'TestCaseModel', id: number, args: string, expectedOutput: string, isSecret: boolean }> } };

export type FindCodeChallengeInfoByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type FindCodeChallengeInfoByIdQuery = { __typename?: 'Query', getCodeChallenge: { __typename?: 'CodeChallenge', id: string, title: string, difficult: Difficult, langDetails: Array<{ __typename?: 'CodeLangChallengeDetail', id: number, lang: ProgrammingLang }> } };

export type FindCodeChallngesQueryVariables = Exact<{
  difficult?: InputMaybe<Difficult>;
  search?: InputMaybe<Scalars['String']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  lang?: InputMaybe<ProgrammingLang>;
}>;


export type FindCodeChallngesQuery = { __typename?: 'Query', findCodeChallenges: { __typename?: 'PaginatedChallenges', data: Array<{ __typename?: 'CodeChallenge', id: string, title: string, description: string, difficult: Difficult }>, pageInfo?: { __typename?: 'PageInfo', currentPage: number, totalPages: number, hasNextPage: boolean } | null } };

export type FindSubmissionInfoByChallengeQueryVariables = Exact<{
  codeChallengeId: Scalars['String']['input'];
}>;


export type FindSubmissionInfoByChallengeQuery = { __typename?: 'Query', getSubmissionsInfoByChallenge: Array<{ __typename?: 'SubmissionInfo', lang: ProgrammingLang, runtime: number, createdAt: any, updatedAt: any, user: { __typename?: 'SimpleUser', id: string, username: string } }> };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const ProfileDocument = new TypedDocumentString(`
    query Profile {
  findProfile {
    id
    username
    avatarUrl
    roles {
      id
      name
      imageUrl
      color
    }
  }
  getScore
}
    `) as unknown as TypedDocumentString<ProfileQuery, ProfileQueryVariables>;
export const RefreshTokenDocument = new TypedDocumentString(`
    mutation RefreshToken {
  refreshToken {
    __typename
  }
}
    `) as unknown as TypedDocumentString<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const LeaderboardQueryDocument = new TypedDocumentString(`
    query LeaderboardQuery {
  findSubmissionsLeaderboard {
    user {
      id
      avatarUrl
      username
    }
    totalScore
  }
}
    `) as unknown as TypedDocumentString<LeaderboardQueryQuery, LeaderboardQueryQueryVariables>;
export const GetUserSubmissionQueryDocument = new TypedDocumentString(`
    query GetUserSubmissionQuery($codeChallengeId: String!, $programmingLang: ProgrammingLang!) {
  getUserSubmission(
    codeChallengeId: $codeChallengeId
    programmingLang: $programmingLang
  ) {
    id
    runtime
    score
    solutionCode
    lang
    status
    createdAt
    updatedAt
  }
}
    `) as unknown as TypedDocumentString<GetUserSubmissionQueryQuery, GetUserSubmissionQueryQueryVariables>;
export const SubmitSolutionDocument = new TypedDocumentString(`
    mutation SubmitSolution($submission: SubmissionInput!) {
  submitUserSolution(submission: $submission) {
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
    `) as unknown as TypedDocumentString<SubmitSolutionMutation, SubmitSolutionMutationVariables>;
export const FindCodeChallengeByIdDocument = new TypedDocumentString(`
    query FindCodeChallengeById($id: String!) {
  getCodeChallenge(id: $id) {
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
    `) as unknown as TypedDocumentString<FindCodeChallengeByIdQuery, FindCodeChallengeByIdQueryVariables>;
export const FindCodeChallengeInfoByIdDocument = new TypedDocumentString(`
    query FindCodeChallengeInfoById($id: String!) {
  getCodeChallenge(id: $id) {
    id
    title
    difficult
    langDetails {
      id
      lang
    }
  }
}
    `) as unknown as TypedDocumentString<FindCodeChallengeInfoByIdQuery, FindCodeChallengeInfoByIdQueryVariables>;
export const FindCodeChallngesDocument = new TypedDocumentString(`
    query FindCodeChallnges($difficult: Difficult, $search: String, $perPage: Int, $page: Int, $lang: ProgrammingLang) {
  findCodeChallenges(
    difficult: $difficult
    search: $search
    perPage: $perPage
    page: $page
    lang: $lang
  ) {
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
    `) as unknown as TypedDocumentString<FindCodeChallngesQuery, FindCodeChallngesQueryVariables>;
export const FindSubmissionInfoByChallengeDocument = new TypedDocumentString(`
    query FindSubmissionInfoByChallenge($codeChallengeId: String!) {
  getSubmissionsInfoByChallenge(codeChallengeId: $codeChallengeId) {
    lang
    runtime
    createdAt
    updatedAt
    user {
      id
      username
    }
  }
}
    `) as unknown as TypedDocumentString<FindSubmissionInfoByChallengeQuery, FindSubmissionInfoByChallengeQueryVariables>;