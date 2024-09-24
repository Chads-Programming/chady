'use client'

import { ENVS } from '@/lib/envs'
import type { TypedDocumentString } from './graphql'

export async function execute<TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) {
  const response = await fetch(`${ENVS.NEXT_PUBLIC_API_HOST}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/graphql-response+json',
    },
    credentials: 'include',
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  const json = await response.json()

  return json.data as TResult
}
