'use client'

import { graphql } from '@/graphql'
import { execute } from '@/graphql/execute'
import { useQuery } from '@tanstack/react-query'

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
  }
`)

export const useGetProfile = () =>
  useQuery({
    queryKey: ['profile'],
    queryFn: () => execute(ProfileQuery),
  })
