'use client'
import { ChallengeList } from '@/app/challenges/components/challenge-list'
import { Footer } from '@/app/shared/components/footer'
import { useQueryParams } from '@/app/shared/hooks/use-query-params'
import type { Difficult } from '@/graphql/graphql'
import { Avatar, AvatarFallback, AvatarImage, Paginator, cn } from '@repo/ui'
import { SearchBox } from '../shared/components/search-box'
import { ChallengeFilters } from './components/challenge-filters'
import { Leaderboard } from './components/leaderboard'
import { useGetCodeChallengesQuery } from './queries/challenges'

const testAvatar =
  'https://cdn.discordapp.com/avatars/526081797952634901/3838b7f65f82c7c0a99521230b1fcf8e.webp?size=128'

const leaderboard = [
  {
    id: '1',
    name: 'Peperman',
    avatar: testAvatar,
    points: 10200,
  },
  {
    id: '2',
    name: 'Gatobros',
    avatar: testAvatar,
    points: 5001,
  },
  {
    id: '3',
    name: 'Ubermax',
    avatar: testAvatar,
    points: 4921,
  },
  {
    id: '4',
    name: 'Randomguy',
    avatar: testAvatar,
    points: 4211,
  },
  {
    id: '5',
    name: 'Groundmind',
    avatar: testAvatar,
    points: 4121,
  },
]

export default function Home() {
  const { searchParams, setParam, removeParam } = useQueryParams()

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
        <aside className="search-header border border-border rounded-md backdrop-blur-md bg-secondary shadow-lg p-2 h-fit sticky top-0">
          <Leaderboard
            title="Top Performers"
            items={leaderboard}
            renderItem={(position, { name, avatar, points }) => (
              <div className="flex flex-row justify-start gap-2 w-full items-center content-start">
                <span className="text-lg mr-2 text-primary font-medium">
                  {position}.
                </span>
                <Avatar>
                  <AvatarImage src={avatar} alt={name} />
                  <AvatarImage src={avatar} alt={name} />
                  <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span
                  className={cn(
                    'text-pretty text-sm text-foreground/75  flex-1 w-[100px]',
                    {
                      '!text-amber-400 animate-pulse': position === 1,
                    },
                  )}
                >
                  {name}
                </span>
                <span className="text-pretty text-xs text-gray-700 dark:text-gray-400 font-medium border border-border rounded-sm px-2 py-1 shadow-md">
                  {points} <span className="text-primary/65">pts.</span>
                </span>
              </div>
            )}
          />
        </aside>

        <section className="flex flex-col items-start w-full md:w-1/2">
          <header className="search-header px-5 flex flex-col items-start w-full gap-2 shadow-md backdrop-blur-md bg-secondary py-4 rounded-md border border-border sticky top-0 z-10">
            <h2 className="text-4xl text-gradient-primary text-pretty font-bold">
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
