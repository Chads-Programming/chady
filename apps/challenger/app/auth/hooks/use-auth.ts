'use client'

import { useEffect } from 'react'
import { LOGOUT_PATH } from '../consts'
import { useAuthStore } from '../store/auth'
import { useGetProfileQuery } from './use-get-profile-query'
import { useRefreshTokenMutation } from './use-refresh-token-mutation'

export const useAuth = () => {
  const {
    data,
    isLoading: isLoadingProfile,
    error,
    refetch: refetchProfile,
  } = useGetProfileQuery()
  const { setProfile, profile, clearProfile } = useAuthStore()
  const { mutate: refreshSession, isPending: isRefreshingSession } =
    useRefreshTokenMutation()

  useEffect(() => {
    const hasExpiredSession = error && profile

    if (hasExpiredSession) {
      console.log('expired session')

      refreshSession(undefined, {
        onSuccess() {
          console.log('refresh ok')
          refetchProfile()
        },
        onError() {
          console.log('refresh bad')
          clearProfile()
        },
      })
    }
  }, [error, refreshSession, clearProfile, profile, refetchProfile])

  useEffect(() => {
    if (!data) {
      return
    }

    setProfile(data.findProfile)
  }, [data, setProfile])

  const logout = () => {
    clearProfile()
    window.location.href = LOGOUT_PATH
  }

  return {
    profile,
    logout,
    isLoading: isRefreshingSession || isLoadingProfile,
  }
}
