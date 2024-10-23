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

export type CreateEventInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  link: Scalars['String']['input'];
  name: Scalars['String']['input'];
  type: EventType;
};

export type CreateEventScheduleInput = {
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  friday?: Scalars['Boolean']['input'];
  monday?: Scalars['Boolean']['input'];
  periocity: Periodicity;
  saturday?: Scalars['Boolean']['input'];
  startTime: Scalars['DateTime']['input'];
  sunday?: Scalars['Boolean']['input'];
  thursday?: Scalars['Boolean']['input'];
  tuesday?: Scalars['Boolean']['input'];
  uniqueDate: Scalars['DateTime']['input'];
  wednesday?: Scalars['Boolean']['input'];
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

export type Event = {
  __typename?: 'Event';
  creators: Array<User>;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  schedule: EventSchedule;
};

export type EventSchedule = {
  __typename?: 'EventSchedule';
  endTime?: Maybe<Scalars['DateTime']['output']>;
  friday: Scalars['Boolean']['output'];
  monday: Scalars['Boolean']['output'];
  periocity: Periodicity;
  saturday: Scalars['Boolean']['output'];
  startTime: Scalars['DateTime']['output'];
  sunday: Scalars['Boolean']['output'];
  thursday: Scalars['Boolean']['output'];
  tuesday: Scalars['Boolean']['output'];
  uniqueDate: Scalars['DateTime']['output'];
  wednesday: Scalars['Boolean']['output'];
};

export enum EventType {
  Course = 'COURSE'
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
  createUserSubmission: SubmissionResult;
  refreshToken: JwtModel;
  registerEvent: Event;
  updateEvent: Event;
  updateSchedule: EventSchedule;
  updateUserSubmission: SubmissionResult;
};


export type MutationCreateCodeChallengeArgs = {
  newCodeChallenge: CreateCodeChallengeInput;
};


export type MutationCreateTestCaseArgs = {
  testCase: CreateTestCaseInput;
};


export type MutationCreateUserSubmissionArgs = {
  submission: SubmissionInput;
};


export type MutationRegisterEventArgs = {
  newEvent: RegisterEventInput;
};


export type MutationUpdateEventArgs = {
  event: UpdateEventInput;
};


export type MutationUpdateScheduleArgs = {
  id: Scalars['Float']['input'];
  schedule: UpdateEventScheduleInput;
};


export type MutationUpdateUserSubmissionArgs = {
  submission: SubmissionInput;
  submissionId: Scalars['String']['input'];
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

export type PaginatedEvents = {
  __typename?: 'PaginatedEvents';
  data: Array<Event>;
  pageInfo?: Maybe<PageInfo>;
};

export enum Periodicity {
  Daily = 'DAILY',
  Monthy = 'MONTHY',
  OnceTime = 'ONCE_TIME',
  Weekly = 'WEEKLY'
}

export enum ProgrammingLang {
  Javascript = 'Javascript',
  Python = 'Python',
  Typescript = 'Typescript'
}

export type Query = {
  __typename?: 'Query';
  events: PaginatedEvents;
  findCodeChallenges: PaginatedChallenges;
  findPersonalScore: Scalars['Float']['output'];
  findProfile: UserDetail;
  findSubmissionsLeaderboard: Array<UserScoreModel>;
  getCodeChallenge: CodeChallenge;
  getUserSubmission: Submission;
  getUserSubmissions: Array<Submission>;
};


export type QueryEventsArgs = {
  page: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
  search: Scalars['String']['input'];
  status: Status;
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


export type QueryGetUserSubmissionArgs = {
  codeChallengeId: Scalars['String']['input'];
  programmingLang: ProgrammingLang;
};

export type RegisterEventInput = {
  creators: Array<Scalars['String']['input']>;
  event: CreateEventInput;
  schedule: CreateEventScheduleInput;
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

export enum Status {
  Pending = 'PENDING',
  Ready = 'READY',
  Rejected = 'REJECTED'
}

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

export type UpdateEventInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  link?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status: Status;
  type?: InputMaybe<EventType>;
};

export type UpdateEventScheduleInput = {
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  friday?: InputMaybe<Scalars['Boolean']['input']>;
  monday?: InputMaybe<Scalars['Boolean']['input']>;
  periocity?: InputMaybe<Periodicity>;
  saturday?: InputMaybe<Scalars['Boolean']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  sunday?: InputMaybe<Scalars['Boolean']['input']>;
  thursday?: InputMaybe<Scalars['Boolean']['input']>;
  tuesday?: InputMaybe<Scalars['Boolean']['input']>;
  uniqueDate?: InputMaybe<Scalars['DateTime']['input']>;
  wednesday?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User = {
  __typename?: 'User';
  avatar: Scalars['String']['output'];
  discordId: Scalars['String']['output'];
  discriminator: Scalars['String']['output'];
  id: Scalars['String']['output'];
  roles: Array<Scalars['String']['output']>;
  username: Scalars['String']['output'];
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
  user: User;
  userId: Scalars['String']['output'];
};

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', findProfile: { __typename?: 'UserDetail', id: string, username: string, avatarUrl: string, roles: Array<{ __typename?: 'RoleDetail', id: string, name: string, imageUrl: string, color: number }> } };

export type CreateUserSubmissionMutationVariables = Exact<{
  submission: SubmissionInput;
}>;


export type CreateUserSubmissionMutation = { __typename?: 'Mutation', createUserSubmission: { __typename?: 'SubmissionResult', submission: { __typename?: 'RegisteredSubmission', id: string, runtime: number, score: number, status: string, createdAt: any, updatedAt: any }, inputResults: Array<{ __typename?: 'InputExecutionResult', isSuccess: boolean, output: string, executionTime: number, timeFormat: string, testCase: { __typename?: 'TestCaseModel', id: number, args: string, isSecret: boolean, expectedOutput: string } }> } };

export type UpdateUserSubmissionMutationVariables = Exact<{
  submissionId: Scalars['String']['input'];
  submission: SubmissionInput;
}>;


export type UpdateUserSubmissionMutation = { __typename?: 'Mutation', updateUserSubmission: { __typename?: 'SubmissionResult', submission: { __typename?: 'RegisteredSubmission', id: string, runtime: number, score: number, status: string, createdAt: any, updatedAt: any }, inputResults: Array<{ __typename?: 'InputExecutionResult', isSuccess: boolean, output: string, executionTime: number, timeFormat: string, testCase: { __typename?: 'TestCaseModel', id: number, args: string, isSecret: boolean, expectedOutput: string } }> } };

export type FindCodeChallengeByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type FindCodeChallengeByIdQuery = { __typename?: 'Query', getCodeChallenge: { __typename?: 'CodeChallenge', id: string, title: string, description: string, difficult: Difficult, langDetails: Array<{ __typename?: 'CodeLangChallengeDetail', id: number, lang: ProgrammingLang, startedCode: string }>, testCases: Array<{ __typename?: 'TestCaseModel', id: number, args: string, expectedOutput: string, isSecret: boolean }> } };

export type FindCodeChallngesQueryVariables = Exact<{
  difficult?: InputMaybe<Difficult>;
  search?: InputMaybe<Scalars['String']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  lang?: InputMaybe<ProgrammingLang>;
}>;


export type FindCodeChallngesQuery = { __typename?: 'Query', findCodeChallenges: { __typename?: 'PaginatedChallenges', data: Array<{ __typename?: 'CodeChallenge', id: string, title: string, description: string, difficult: Difficult }>, pageInfo?: { __typename?: 'PageInfo', currentPage: number, totalPages: number, hasNextPage: boolean } | null } };

export type LeaderboardQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type LeaderboardQueryQuery = { __typename?: 'Query', findSubmissionsLeaderboard: Array<{ __typename?: 'UserScoreModel', totalScore: number, user: { __typename?: 'User', id: string, avatar: string, username: string } }> };

export type GetUserSubmissionQueryQueryVariables = Exact<{
  codeChallengeId: Scalars['String']['input'];
  programmingLang: ProgrammingLang;
}>;


export type GetUserSubmissionQueryQuery = { __typename?: 'Query', getUserSubmission: { __typename?: 'Submission', id: string, runtime: number, score: number, solutionCode: string, lang: ProgrammingLang, status: string, createdAt: any, updatedAt: any } };

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
}
    `) as unknown as TypedDocumentString<ProfileQuery, ProfileQueryVariables>;
export const CreateUserSubmissionDocument = new TypedDocumentString(`
    mutation CreateUserSubmission($submission: SubmissionInput!) {
  createUserSubmission(submission: $submission) {
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
    `) as unknown as TypedDocumentString<CreateUserSubmissionMutation, CreateUserSubmissionMutationVariables>;
export const UpdateUserSubmissionDocument = new TypedDocumentString(`
    mutation UpdateUserSubmission($submissionId: String!, $submission: SubmissionInput!) {
  updateUserSubmission(submissionId: $submissionId, submission: $submission) {
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
    `) as unknown as TypedDocumentString<UpdateUserSubmissionMutation, UpdateUserSubmissionMutationVariables>;
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
export const LeaderboardQueryDocument = new TypedDocumentString(`
    query LeaderboardQuery {
  findSubmissionsLeaderboard {
    user {
      id
      avatar
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