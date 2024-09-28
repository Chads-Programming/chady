import { Difficult } from '@/graphql/graphql'
import { ToggleGroup, ToggleGroupItem } from '@repo/ui'

interface Props {
  onDifficultChange(difficult: Difficult): void
}

export const ChallengeFilters = ({ onDifficultChange }: Props) => {
  return (
    <ToggleGroup type="single" onValueChange={onDifficultChange}>
      <ToggleGroupItem
        className="border border-border"
        value={Difficult.Easy}
        aria-label="Toggle easy"
      >
        Easy
      </ToggleGroupItem>
      <ToggleGroupItem
        className="border border-border"
        value={Difficult.Medium}
        aria-label="Toggle medium"
      >
        Medium
      </ToggleGroupItem>
      <ToggleGroupItem
        className="border border-border"
        value={Difficult.Hard}
        aria-label="Toggle hard"
      >
        Hard
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
