'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const useQueryParams = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const setParam = (key: string, value: string, scroll = false) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set(key, value)

    const queryParams = params.toString()

    router.push(`${pathname}?${queryParams}`, { scroll })
  }

  const removeParam = (key: string, scroll = false) => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete(key)

    const queryParams = params.toString()

    router.push(`${pathname}?${queryParams}`, { scroll })
  }

  return {
    searchParams,
    setParam,
    removeParam,
  }
}
