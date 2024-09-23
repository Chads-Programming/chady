import Markdown from 'react-markdown'
import type { ChallengeDifficult } from '../types'
import { DifficultBadge } from './difficult-badge'

interface Props {
  title: string
  description: string
  difficulty: ChallengeDifficult
}

export const ChallengeDescription = ({
  title,
  description,
  difficulty,
}: Props) => {
  return (
    <article className="flex flex-col gap-2 h-full overflow-y-auto px-2">
      <header className="flex flex-col gap-2 mb-4">
        <h2 className="font-bold text-xl text-foreground">{title}</h2>
        <DifficultBadge difficulty={difficulty} />
      </header>
      <Markdown className="text-gray-300 text-sm challenge-description">
        {description}
      </Markdown>
    </article>
  )
}
