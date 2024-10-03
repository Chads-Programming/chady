import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

export const useSameRedirect = () => {
  const path = usePathname()

  return useRedirect(path)
}

export const useRedirect = (redirectPath: string) => {
  return useMemo(() => {
    if (typeof window === 'undefined') {
      return
    }

    return encodeURIComponent(`${window.location.origin}${redirectPath}`)
  }, [redirectPath])
}
