import { ChallengeCard } from '@/app/challenges/components/challenge-card'
import type { CodeChallenge } from '@/graphql/graphql'
import { Skeleton } from '@repo/ui'
import Image from 'next/image'
import { memo } from 'react'

interface Props {
  isLoading: boolean
  challenges?: Pick<
    CodeChallenge,
    'id' | 'title' | 'description' | 'difficult'
  >[]
}

export const ChallengeList = memo(({ isLoading, challenges = [] }: Props) => {
  if (isLoading) {
    return (
      <div className="my-3 w-full h-full">
        <Skeleton className="w-full h-full bg-secondary" />
      </div>
    )
  }

  if (!isLoading && !challenges.length) {
    return (
      <div className="my-3 flex flex-col justify-center items-center w-full h-full ">
        <Image
          src="/sad-pepe.svg"
          width={200}
          height={200}
          alt="Challenge not found image"
        />
        <p className="text-4xl font-semibold text-primary">
          Challenges not found
        </p>
      </div>
    )
  }

  return (
    <div className="my-3 flex flex-col items-start gap-4 w-full h-full">
      {challenges.map(({ id, title, description, difficult }) => (
        <ChallengeCard
          key={id}
          id={id}
          title={title}
          description={description}
          difficulty={difficult}
        />
      ))}
    </div>
  )
})
