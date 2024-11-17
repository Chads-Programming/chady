'use client'

import { graphql } from '@/graphql'
import { execute } from '@/graphql/execute'
import { useQuery } from '@tanstack/react-query'

const REFETCH_INTERVAL_TIME = 1000 * 60 * 20

const ProfileQuery = graphql(`
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
`)

export const useGetProfileQuery = () =>
  useQuery({
    queryKey: ['profile'],
    queryFn: () => execute(ProfileQuery),
    refetchInterval: REFETCH_INTERVAL_TIME,
  })
