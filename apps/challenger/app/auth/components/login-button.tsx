import Discord from '@/app/shared/icons/discord'
import { ChevronRight } from 'lucide-react'
import { LOGIN_PATH } from '../consts'
import { useSameRedirect } from '../hooks/use-redirect'

interface Props {
  sameRedirect?: boolean
}

export const LoginButton = ({ sameRedirect }: Props) => {
  const redirectUrl = useSameRedirect()

  return (
    <a
      href={`${
        sameRedirect ? `${LOGIN_PATH}?redirectUrl=${redirectUrl}` : LOGIN_PATH
      }`}
      className="group px-2 rounded-md border border-border inline-flex gap-1 items-center text-sm font-medium hover:text-foreground text-foreground/80 transition-colors"
    >
      <Discord className="w-5 h-5" /> Login with Discord
      <ChevronRight className="w-0 opacity-0 group-hover:w-5 group-hover:opacity-100  group-hover:translate-x-2 transition-all ease-in duration-200" />
    </a>
  )
}
