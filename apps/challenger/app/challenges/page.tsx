'use client'

import { ChallengeList } from '@/app/challenges/components/challenge-list'
import { EmptyState } from '@/app/shared/components/empty-state'
import { ErrorState } from '@/app/shared/components/error-state'
import { Footer } from '@/app/shared/components/footer'
import { useQueryParams } from '@/app/shared/hooks/use-query-params'
import type { Difficult } from '@/graphql/graphql'
import { LoaderAndError, Paginator } from '@repo/ui'
import { useMemo } from 'react'
import { SearchBox } from '../shared/components/search-box'
import { ChallengeFilters } from './components/challenge-filters'
import {
  type CoderLeadItem,
  CodersLeaderboard,
} from './components/coders-leaderboard'
import { useGetCodeChallengesQuery } from './hooks/use-get-challenges-query'
import { useGetLeaderboardQuery } from './hooks/use-get-leaderdboard-query'

export default function Home() {
  const { searchParams, setParam, removeParam } = useQueryParams()
  const {
    data: leaderboardResult,
    isLoading: isLoadingLeaderboard,
    isError: isLeaderboardError,
  } = useGetLeaderboardQuery()

  const codersLeaderboard: CoderLeadItem[] = useMemo(() => {
    if (!leaderboardResult?.leaderboard) {
      return []
    }

    return leaderboardResult.leaderboard.map(({ user, totalScore }) => ({
      id: user.id,
      avatar: user.avatarUrl,
      username: user.username,
      totalScore: totalScore,
    }))
  }, [leaderboardResult])

  const handlePageChange = (page: number) => {
    setParam('page', page.toString())
  }

  const handleSearchChange = (search: string) => {
    if (search) {
      return setParam('search', search)
    }

    return removeParam('search')
  }

  const handleDifficultChange = (difficult: Difficult) => {
    if (difficult) {
      return setParam('difficult', difficult)
    }

    return removeParam('difficult')
  }

  const { data, isLoading } = useGetCodeChallengesQuery({
    search: searchParams.get('search'),
    difficult: searchParams.get('difficult') as Difficult,
    page: Number(searchParams.get('page') ?? 1),
    perPage: 10,
  })

  return (
    <main className="flex flex-col">
      <div className="w-full z-10 flex flex-row flex-wrap justify-center py-4 px-8 gap-8 flex-1 min-h-[calc(100dvh-8rem)]">
        <aside className="search-header w-full md:w-1/4 xl:w-1/5 h-fit border border-border rounded-md backdrop-blur-md bg-secondary shadow-lg p-2 sticky top-0">
          <LoaderAndError
            data={codersLeaderboard}
            loading={isLoadingLeaderboard}
            isError={isLeaderboardError}
            errorState={
              <ErrorState
                title="Something wrong happened"
                description="An error has occurred during the proccess"
              />
            }
            emptyState={
              <EmptyState
                title="Leaderboard is not available"
                description="Sorry, we don't have a leaderboard data yet to show"
              />
            }
          >
            {({ data }) => <CodersLeaderboard items={data} />}
          </LoaderAndError>
        </aside>

        <section className="flex flex-col items-start w-full md:w-1/2 lg:w-1/3">
          <header className="search-header px-5 flex flex-col items-start w-full gap-2 shadow-md backdrop-blur-md bg-secondary py-4 rounded-md border border-border sticky top-0 z-10">
            <h2 className="text-xl sm:text-2xl md:text-4xl text-gradient-primary text-pretty font-bold">
              Explore our Challenges
            </h2>

            <ChallengeFilters onDifficultChange={handleDifficultChange} />
            <SearchBox
              value={searchParams.get('search') ?? ''}
              onSearch={handleSearchChange}
              placeholder="Search challenges"
            />
          </header>

          <ChallengeList challenges={data?.challenges} isLoading={isLoading} />
          {data?.challenges && (
            <Paginator
              totalPages={data.pageInfo.totalPages ?? 0}
              currentPage={data.pageInfo.currentPage ?? 0}
              pageSize={10}
              onPageChange={handlePageChange}
            />
          )}
        </section>
      </div>
      <Footer />
    </main>
  )
}
