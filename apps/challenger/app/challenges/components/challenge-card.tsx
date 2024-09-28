import { Difficult } from '@/graphql/graphql'
import { Card, CardContent, CardHeader, CardTitle, cn } from '@repo/ui'
import Link from 'next/link'
import { useMemo } from 'react'
import Markdown from 'react-markdown'
import { DifficultBadge } from './difficult-badge'

interface Props {
  id: string
  title: string
  description: string
  difficulty: Difficult
}

export const ChallengeCard = ({
  id,
  title,
  description,
  difficulty,
}: Props) => {
  const miniDescription = useMemo(
    () => description.substring(0, 150).concat('...'),
    [description],
  )

  return (
    <Link
      href={`/challenges/${id}`}
      className="group relative w-full flex justify-center items-center"
    >
      <div
        className={cn(
          'group-hover:blur transition-all ease-in absolute w-full h-full inset-0 rounded-lg',
          {
            'group-hover:bg-gradient-to-br from-primary to-green-400':
              difficulty === Difficult.Easy,
            'group-hover:bg-gradient-to-br from-amber-400 to-primary':
              difficulty === Difficult.Medium,
            'group-hover:bg-gradient-to-br from-red-500 to-primary':
              difficulty === Difficult.Hard,
          },
        )}
      />
      <Card
        className={cn(
          'transition-all ease-in-out bg-secondary dark:bg-zinc-950 relative w-[calc(100%-2px)] h-[calc(100%-2px)] border border-border',
          {
            'group-hover:border-primary': difficulty === Difficult.Easy,
            'group-hover:border-amber-400': difficulty === Difficult.Medium,
            'group-hover:border-red-500': difficulty === Difficult.Hard,
          },
        )}
      >
        <CardHeader>
          <CardTitle className="text-gray-300 text-xl">{title}</CardTitle>
          <DifficultBadge difficulty={difficulty} />
        </CardHeader>
        <CardContent>
          <div className="text-pretty text-sm challenge-description line-clamp-3 select-none">
            <Markdown className="py-4 px-2 rounded-md shadow-md text-muted-foreground">
              {miniDescription}
            </Markdown>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
