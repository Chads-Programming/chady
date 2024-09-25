'use client'
import { Avatar, AvatarFallback, AvatarImage, cn } from '@repo/ui'
import { Footer } from '../shared/components/footer'
import { SearchBox } from '../shared/components/search-box'
import { ChallengeCard } from './components/challenge-card'
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
  const { data } = useGetCodeChallengesQuery({})

  return (
    <>
      <main className="w-full z-10 flex flex-row flex-wrap justify-center py-4 px-8 gap-8 flex-1">
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
          <header className="search-header px-5 flex flex-col items-start w-full gap-2 shadow-md backdrop-blur-md bg-secondary py-4 rounded-t-md border border-border sticky top-0 z-10">
            <h2 className="text-4xl text-gradient-primary text-pretty font-bold">
              Explore our Challenges
            </h2>

            <ChallengeFilters />
            <SearchBox onSearch={() => null} placeholder="Search challenges" />
          </header>

          <div className="flex flex-col gap-2 w-full border border-border border-t-0 bg-secondary">
            {data?.challenges.map(({ id, title, description, difficult }) => (
              <ChallengeCard
                key={id}
                id={id}
                title={title}
                description={description}
                difficulty={difficult}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
