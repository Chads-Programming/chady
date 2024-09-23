import { Badge, cn } from '@repo/ui'
import { ChallengeDifficult } from '../types'

interface Props {
  difficulty: ChallengeDifficult
}

export const DifficultBadge = ({ difficulty }: Props) => {
  return (
    <Badge
      variant="secondary"
      className={cn('w-fit text-white bg-neutral-700 select-none shadow-md', {
        'text-primary': difficulty === ChallengeDifficult.Easy,
        'text-amber-400': difficulty === ChallengeDifficult.Medium,
        'text-red-400': difficulty === ChallengeDifficult.Hard,
      })}
    >
      {difficulty}
    </Badge>
  )
}
