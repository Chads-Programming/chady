/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any }
}

export type CodeChallenge = {
  __typename?: 'CodeChallenge'
  createdAt: Scalars['DateTime']['output']
  difficult: Difficult
  id: Scalars['String']['output']
  lang: ProgrammingLang
  mainCode: Scalars['String']['output']
  startedCode: Scalars['String']['output']
  testCases: Array<TestCase>
  title: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type CreateCodeChallengeInput = {
  description: Scalars['String']['input']
  difficult: Difficult
  title: Scalars['String']['input']
}

export type CreateEventInput = {
  description?: InputMaybe<Scalars['String']['input']>
  link: Scalars['String']['input']
  name: Scalars['String']['input']
  type: EventType
}

export type CreateEventScheduleInput = {
  endTime?: InputMaybe<Scalars['DateTime']['input']>
  friday?: Scalars['Boolean']['input']
  monday?: Scalars['Boolean']['input']
  periocity: Periodicity
  saturday?: Scalars['Boolean']['input']
  startTime: Scalars['DateTime']['input']
  sunday?: Scalars['Boolean']['input']
  thursday?: Scalars['Boolean']['input']
  tuesday?: Scalars['Boolean']['input']
  uniqueDate: Scalars['DateTime']['input']
  wednesday?: Scalars['Boolean']['input']
}

export type CreateTestCaseInput = {
  args: Scalars['JSON']['input']
  codeChallengeId: Scalars['String']['input']
  expectedOutput: Scalars['String']['input']
  isSecret: Scalars['Boolean']['input']
}

export enum Difficult {
  Easy = 'Easy',
  Hard = 'Hard',
  Medium = 'Medium',
}

export type Event = {
  __typename?: 'Event'
  creators: Array<User>
  description: Scalars['String']['output']
  id: Scalars['String']['output']
  name: Scalars['String']['output']
  schedule: EventSchedule
}

export type EventSchedule = {
  __typename?: 'EventSchedule'
  endTime?: Maybe<Scalars['DateTime']['output']>
  friday: Scalars['Boolean']['output']
  monday: Scalars['Boolean']['output']
  periocity: Periodicity
  saturday: Scalars['Boolean']['output']
  startTime: Scalars['DateTime']['output']
  sunday: Scalars['Boolean']['output']
  thursday: Scalars['Boolean']['output']
  tuesday: Scalars['Boolean']['output']
  uniqueDate: Scalars['DateTime']['output']
  wednesday: Scalars['Boolean']['output']
}

export enum EventType {
  Course = 'COURSE',
}

export type InputExecutionResult = {
  __typename?: 'InputExecutionResult'
  executionTime: Scalars['Float']['output']
  output: Scalars['String']['output']
  testCase: TestCase
  timeFormat: Scalars['String']['output']
}

export type JwtModel = {
  __typename?: 'JwtModel'
  accessToken: Scalars['String']['output']
  refreshToken: Scalars['String']['output']
}

export type Mutation = {
  __typename?: 'Mutation'
  createCodeChallenge: CodeChallenge
  createTestCase: CodeChallenge
  createUserSubmission: SubmissionResult
  refreshToken: JwtModel
  registerEvent: Event
  updateEvent: Event
  updateSchedule: EventSchedule
  updateUserSubmission: SubmissionResult
}

export type MutationCreateCodeChallengeArgs = {
  newCodeChallenge: CreateCodeChallengeInput
}

export type MutationCreateTestCaseArgs = {
  testCase: CreateTestCaseInput
}

export type MutationCreateUserSubmissionArgs = {
  submission: SubmissionInput
}

export type MutationRegisterEventArgs = {
  newEvent: RegisterEventInput
}

export type MutationUpdateEventArgs = {
  event: UpdateEventInput
}

export type MutationUpdateScheduleArgs = {
  id: Scalars['Float']['input']
  schedule: UpdateEventScheduleInput
}

export type MutationUpdateUserSubmissionArgs = {
  submission: SubmissionInput
  submissionId: Scalars['String']['input']
}

export type PageInfo = {
  __typename?: 'PageInfo'
  currentPage: Scalars['Float']['output']
  hasNextPage: Scalars['Boolean']['output']
  total: Scalars['Float']['output']
  totalPages: Scalars['Float']['output']
}

export type PaginatedChallenges = {
  __typename?: 'PaginatedChallenges'
  data: Array<CodeChallenge>
  pageInfo?: Maybe<PageInfo>
}

export type PaginatedEvents = {
  __typename?: 'PaginatedEvents'
  data: Array<Event>
  pageInfo?: Maybe<PageInfo>
}

export enum Periodicity {
  Daily = 'DAILY',
  Monthy = 'MONTHY',
  OnceTime = 'ONCE_TIME',
  Weekly = 'WEEKLY',
}

export enum ProgrammingLang {
  Javascript = 'Javascript',
  Python = 'Python',
  Typescript = 'Typescript',
}

export type Query = {
  __typename?: 'Query'
  events: PaginatedEvents
  findCodeChallenges: PaginatedChallenges
  findProfile: UserDetail
  getCodeChallenge: CodeChallenge
  getUserSubmission: Submission
  getUserSubmissions: Array<Submission>
}

export type QueryEventsArgs = {
  page: Scalars['Int']['input']
  perPage: Scalars['Int']['input']
  search: Scalars['String']['input']
  status: Status
}

export type QueryFindCodeChallengesArgs = {
  difficult: Difficult
  lang: ProgrammingLang
  page: Scalars['Int']['input']
  perPage: Scalars['Int']['input']
  search: Scalars['String']['input']
}

export type QueryGetCodeChallengeArgs = {
  id: Scalars['String']['input']
}

export type QueryGetUserSubmissionArgs = {
  submissionId: Scalars['String']['input']
}

export type RegisterEventInput = {
  creators: Array<Scalars['String']['input']>
  event: CreateEventInput
  schedule: CreateEventScheduleInput
}

export type RoleDetail = {
  __typename?: 'RoleDetail'
  color: Scalars['Float']['output']
  id: Scalars['String']['output']
  imageUrl: Scalars['String']['output']
  name: Scalars['String']['output']
}

export enum Status {
  Pending = 'PENDING',
  Ready = 'READY',
  Rejected = 'REJECTED',
}

export type Submission = {
  __typename?: 'Submission'
  codeChallenge: CodeChallenge
  createdAt: Scalars['DateTime']['output']
  id: Scalars['String']['output']
  runtime: Scalars['Float']['output']
  solutionCode: Scalars['String']['output']
  status: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  user: UserDetail
}

export type SubmissionInput = {
  challengeId: Scalars['String']['input']
  lang: ProgrammingLang
  solutionCode: Scalars['String']['input']
}

export type SubmissionResult = {
  __typename?: 'SubmissionResult'
  inputResults: Array<InputExecutionResult>
  submission: Submission
}

export type TestCase = {
  __typename?: 'TestCase'
  args: Scalars['JSON']['output']
  expectedOutput: Scalars['String']['output']
  id: Scalars['Float']['output']
  isSecret: Scalars['Boolean']['output']
}

export type UpdateEventInput = {
  description?: InputMaybe<Scalars['String']['input']>
  id: Scalars['String']['input']
  link?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  status: Status
  type?: InputMaybe<EventType>
}

export type UpdateEventScheduleInput = {
  endTime?: InputMaybe<Scalars['DateTime']['input']>
  friday?: InputMaybe<Scalars['Boolean']['input']>
  monday?: InputMaybe<Scalars['Boolean']['input']>
  periocity?: InputMaybe<Periodicity>
  saturday?: InputMaybe<Scalars['Boolean']['input']>
  startTime?: InputMaybe<Scalars['DateTime']['input']>
  sunday?: InputMaybe<Scalars['Boolean']['input']>
  thursday?: InputMaybe<Scalars['Boolean']['input']>
  tuesday?: InputMaybe<Scalars['Boolean']['input']>
  uniqueDate?: InputMaybe<Scalars['DateTime']['input']>
  wednesday?: InputMaybe<Scalars['Boolean']['input']>
}

export type User = {
  __typename?: 'User'
  avatar: Scalars['String']['output']
  discordId: Scalars['String']['output']
  discriminator: Scalars['String']['output']
  id: Scalars['String']['output']
  roles: Array<Scalars['String']['output']>
  username: Scalars['String']['output']
}

export type UserDetail = {
  __typename?: 'UserDetail'
  avatar: Scalars['String']['output']
  avatarUrl: Scalars['String']['output']
  discordId: Scalars['String']['output']
  discriminator: Scalars['String']['output']
  id: Scalars['String']['output']
  roles: Array<RoleDetail>
  username: Scalars['String']['output']
}

export type ProfileQueryVariables = Exact<{ [key: string]: never }>

export type ProfileQuery = {
  __typename?: 'Query'
  findProfile: {
    __typename?: 'UserDetail'
    id: string
    username: string
    avatarUrl: string
    roles: Array<{
      __typename?: 'RoleDetail'
      id: string
      name: string
      imageUrl: string
      color: number
    }>
  }
}

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType']

  constructor(
    private value: string,
    public __meta__?: Record<string, any>,
  ) {
    super(value)
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value
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
    `) as unknown as TypedDocumentString<ProfileQuery, ProfileQueryVariables>
