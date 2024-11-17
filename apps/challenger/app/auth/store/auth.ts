import type { ProfileQuery } from '@/graphql/graphql'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { devtools } from 'zustand/middleware'

type Profile = ProfileQuery['findProfile']

interface AutState {
  profile?: Profile
  score?: number

  clearProfile(): void
  setProfile(profile: Profile, score: number): void
}

export const useAuthStore = create<AutState>()(
  devtools(
    persist(
      (setStore) => ({
        clearProfile: () => {
          setStore(() => {
            return {
              profile: undefined,
            }
          })
        },
        setProfile: (profile, score) => {
          setStore((state) => {
            return {
              ...state,
              profile,
              score,
            }
          })
        },
      }),
      { name: 'auth-storage' },
    ),
  ),
)
