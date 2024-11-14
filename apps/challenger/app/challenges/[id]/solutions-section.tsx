'use client'

import { EmptyState } from '@/app/shared/components/empty-state'
import { ErrorState } from '@/app/shared/components/error-state'
import { getDiffTime } from '@/helpers/get-diff-time'
import { LoaderAndError } from '@repo/ui'
import { Calendar, Timer } from 'lucide-react'
import { LangIcon } from '../components/lang-icon'
import { useGetSolutionsInfoByChallengesQuery } from '../hooks/use-get-solutions-info-by-challenge.query'

interface Props {
  codeChallengeId: string
}

export const SolutionsSection = ({ codeChallengeId }: Props) => {
  const { data, isLoading, isError } = useGetSolutionsInfoByChallengesQuery({
    codeChallengeId,
  })

  return (
    <section className="w-full h-full overflow-y-auto px-2">
      <div className="flex flex-col items-start justify-center gap-2 w-full">
        <LoaderAndError
          loading={isLoading}
          isError={isError}
          data={data}
          emptyState={
            <EmptyState
              title="No solutions found"
              description="This challenges has not solutions yet"
            />
          }
          errorState={<ErrorState title="An error has occurred" />}
        >
          {({ data }) =>
            data.solutions.map(({ user, runtime, lang, updatedAt }) => (
              <article
                key={user.id}
                className="transition ease-linear px-3 py-1 cursor-pointer select-none flex flex-col gap-3 items-start w-full hover:bg-zinc-300 hover:dark:bg-zinc-700 rounded-md"
              >
                <header className="inline-flex justify-between w-full">
                  <h2 className="font-bold text-pretty">
                    {user.username.toLowerCase()}'s solution
                  </h2>
                  <LangIcon lang={lang} />
                </header>
                <footer className="inline-flex items-center gap-2 w-full justify-between">
                  <div className="inline-flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4" />
                    <time className="text-xs mt-0.5">
                      {getDiffTime(new Date(updatedAt))}
                    </time>
                  </div>
                  <div className="inline-flex items-center gap-2 text-primary">
                    <Timer className="w-4" />
                    <span className="font-mono text-sm mt-0.5">
                      {runtime} ms
                    </span>
                  </div>
                </footer>
              </article>
            ))
          }
        </LoaderAndError>
      </div>
    </section>
  )
}
