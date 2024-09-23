import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/ui'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import Markdown from 'react-markdown'
import type { ChallengeDifficult } from '../types'
import { DifficultBadge } from './difficult-badge'

interface Props {
  id: string
  title: string
  description: string
  difficulty: ChallengeDifficult
}

export const ChallengeCard = ({
  id,
  title,
  description,
  difficulty,
}: Props) => {
  const router = useRouter()
  const miniDescription = useMemo(
    () => description.substring(0, 120).concat('...'),
    [description],
  )

  const goToChallenge = (id: string) => () => {
    void router.push(`/challenges/${id}`)
  }

  return (
    <Card className="backdrop-blur-md bg-background/10 shadow-lg border-border border-x-0 border-t-0 rounded-none">
      <CardHeader>
        <CardTitle className="text-gray-300 text-xl">{title}</CardTitle>
        <DifficultBadge difficulty={difficulty} />
      </CardHeader>
      <CardContent>
        <div className="text-pretty text-sm challenge-description line-clamp-2 select-none">
          <Markdown className="border border-border p-6 rounded-md shadow-md text-muted-foreground">
            {miniDescription}
          </Markdown>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant="secondary"
          className="group border border-transparent hover:border-primary transition ease-in"
          onClick={goToChallenge(id)}
        >
          Solve
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-all ease-in" />
        </Button>
      </CardFooter>
    </Card>
  )
}
