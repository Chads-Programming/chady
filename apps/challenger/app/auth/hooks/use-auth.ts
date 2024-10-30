'use client'

import { useEffect } from 'react'
import { LOGOUT_PATH } from '../consts'
import { useAuthStore } from '../store/auth'
import { useGetProfileQuery } from './use-get-profile-query'
import { useRefreshTokenMutation } from './use-refresh-token-mutation'

export const useAuth = () => {
  const {
    data: profileResult,
    isLoading: isLoadingProfile,
    error,
    refetch: refetchProfile,
  } = useGetProfileQuery()
  const { setProfile, profile: storedProfile, clearProfile } = useAuthStore()
  const { mutate: refreshSession } = useRefreshTokenMutation()

  useEffect(() => {
    const hasExpiredSession = error && storedProfile

    if (hasExpiredSession) {
      refreshSession(undefined, {
        onSuccess() {
          refetchProfile()
        },
        onError() {
          clearProfile()
        },
      })
    }
  }, [error, refreshSession, clearProfile, storedProfile, refetchProfile])

  useEffect(() => {
    if (!profileResult) {
      return
    }

    setProfile(profileResult.findProfile)
  }, [profileResult, setProfile])

  const logout = () => {
    clearProfile()
    window.location.href = LOGOUT_PATH
  }

  return {
    profile: storedProfile,
    logout,
    isLoading: isLoadingProfile,
  }
}
