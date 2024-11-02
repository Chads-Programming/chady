import type { Difficult } from '@/graphql/graphql'
import Markdown from 'react-markdown'
import { DifficultBadge } from './difficult-badge'

interface Props {
  title: string
  description: string
  difficulty: Difficult
}

export const ChallengeDescription = ({
  title,
  description,
  difficulty,
}: Props) => {
  return (
    <article className="flex flex-col gap-2 h-full overflow-y-auto px-2">
      <header className="flex flex-col gap-2 mb-4">
        <h2 className="font-bold text-xl dark:text-secondary-foreground">
          {title}
        </h2>
        <DifficultBadge difficulty={difficulty} />
      </header>
      <Markdown className="font-mono text-gray-600 dark:text-gray-300 text-sm challenge-description">
        {description}
      </Markdown>
    </article>
  )
}
