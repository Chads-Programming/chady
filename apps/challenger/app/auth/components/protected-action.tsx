'use client'

import type React from 'react'
import { useAuth } from '../hooks/use-auth'

import { useSameRedirect } from '@/app/auth/hooks/use-redirect'
import Discord from '@/app/shared/icons/discord'
import { ChevronRight } from 'lucide-react'
import { LOGIN_PATH } from '../consts'

interface Props {
  label?: string
  children: React.ReactNode
}

export const ProtectedAction = ({
  children,
  label = 'Login to continue',
}: Props) => {
  const { profile } = useAuth()
  const redirectUrl = useSameRedirect()

  if (profile) {
    return children
  }

  return (
    <a
      href={`${LOGIN_PATH}?redirectUrl=${redirectUrl}`}
      className="group px-4 py-1 text-[#5765F2] font-medium text-sm border border-[#5765F2] rounded-md inline-flex items-center gap-2"
    >
      <Discord className="w-5 h-5" /> {label}
      <ChevronRight className="w-0 opacity-0 group-hover:w-5 group-hover:opacity-100  group-hover:translate-x-2 transition-all ease-in duration-200" />
    </a>
  )
}
