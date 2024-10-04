import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export const useSameRedirect = () => {
  const path = usePathname()

  return useRedirect(path)
}

export const useRedirect = (redirectPath: string) => {
  const [redirectUrl, setRedirectUrl] = useState('')

  useEffect(() => {
    setRedirectUrl(
      encodeURIComponent(`${window.location.origin}${redirectPath}`),
    )
  }, [redirectPath])

  return redirectUrl
}
