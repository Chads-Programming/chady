'use client'
import { Avatar, AvatarFallback, AvatarImage, cn } from '@repo/ui'
import { Footer } from '../shared/components/footer'
import { SearchBox } from '../shared/components/search-box'
import { ChallengeCard } from './components/challenge-card'
import { ChallengeFilters } from './components/challenge-filters'
import { Leaderboard } from './components/leaderboard'
import { ChallengeDifficult } from './types'

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

const challenges = [
  {
    id: '1',
    title: 'Two Sum',
    difficulty: ChallengeDifficult.Easy,
    description:
      'Given an array of integers **nums** and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.\n\n### Case: 1\n``\n[1,2] => 3\n``\n\n### Case: 2\n``\n[1,3] => 4\n``',
  },
  {
    id: '2',
    title: 'Reverse Linked List',
    difficulty: ChallengeDifficult.Medium,
    description:
      'Given the head of a singly linked list, reverse the list, and return the reversed list. A linked list can be reversed either iteratively or recursively. Could you implement both?\n\n### Example:\nSuppose the linked list is:\n\n`1 -> 2 -> 3 -> 4 -> 5`\n\nThe reversed linked list would be:\n\n`5 -> 4 -> 3 -> 2 -> 1`\n\n### Case: 1\n**Input:** `1 -> 2 -> 3`\n\n**Output:** `3 -> 2 -> 1`\n\n### Case: 2\n**Input:** `7 -> 8 -> 9 -> 10`\n\n**Output:** `10 -> 9 -> 8 -> 7`\n\n### Case: 3\n**Input:** `null` (empty list)\n\n**Output:** `null`',
  },
  {
    id: '3',
    title: 'Merge K Sorted Lists',
    difficulty: ChallengeDifficult.Hard,
    description:
      'You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it. The number of nodes in all the linked-lists is in the range [0, 10^4]. The value of each node in the linked-list is in the range [-10^4, 10^4].',
  },
  {
    id: '4',
    title: 'Valid Parentheses',
    difficulty: ChallengeDifficult.Easy,
    description:
      "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order. Every close bracket has a corresponding open bracket of the same type.",
  },
  {
    id: '5',
    title: 'LRU Cache',
    difficulty: ChallengeDifficult.Hard,
    description:
      'Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the LRUCache class: LRUCache(int capacity) Initialize the LRU cache with positive size capacity. int get(int key) Return the value associated with key if the key exists, otherwise return -1. void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.',
  },
]

export default function Home() {
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
            {challenges.map(({ id, title, description, difficulty }) => (
              <ChallengeCard
                key={id}
                id={id}
                title={title}
                description={description}
                difficulty={difficulty}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
