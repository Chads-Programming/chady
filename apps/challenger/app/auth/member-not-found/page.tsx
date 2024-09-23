import { DISCORD_INVITATION_LINK } from '@/app/shared/consts'
import Discord from '@/app/shared/icons/discord'

const MemberNotFoundPage = () => {
  return (
    <main className="flex flex-col items-center justify-center h-[calc(100dvh_-_70px)]">
      <h2 className="font-bold text-3xl">Member not found</h2>
      <p className="text-pretty text-foreground/60 font-medium text-lg">
        You must be a member our <strong>discord community</strong>
      </p>

      <a
        target="_blank"
        href={DISCORD_INVITATION_LINK}
        className="inline-flex gap-2 mt-4 text-gradient-primary font-bold items-center text-lg"
        rel="noreferrer"
      >
        join us <Discord />
      </a>
    </main>
  )
}

export default MemberNotFoundPage
