import type { ProfileQuery } from '@/graphql/graphql'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { devtools } from 'zustand/middleware'

interface AutState {
  profile?: ProfileQuery['findProfile']

  clearProfile(): void
  setProfile(profile: ProfileQuery['findProfile']): void
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
        setProfile: (profile) => {
          setStore((state) => {
            return {
              ...state,
              profile,
            }
          })
        },
      }),
      { name: 'auth-storage' },
    ),
  ),
)
