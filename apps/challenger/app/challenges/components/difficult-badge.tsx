import { Difficult } from '@/graphql/graphql'
import { Badge, cn } from '@repo/ui'

interface Props {
  difficulty: Difficult
}

export const DifficultBadge = ({ difficulty }: Props) => {
  return (
    <Badge
      variant="secondary"
      className={cn('w-fit text-white bg-neutral-700 select-none shadow-md', {
        'text-primary': difficulty === Difficult.Easy,
        'text-amber-400': difficulty === Difficult.Medium,
        'text-red-400': difficulty === Difficult.Hard,
      })}
    >
      {difficulty}
    </Badge>
  )
}
