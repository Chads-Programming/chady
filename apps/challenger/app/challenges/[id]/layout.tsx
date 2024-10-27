import type React from 'react'

interface Props {
  children: React.ReactNode
}

import type { Metadata } from 'next'
import { getChallengeInfoTitleById } from '../services/get-challenge-by-id'

type PageProps = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const challengeId = (await params).id

  const { getCodeChallenge } = await getChallengeInfoTitleById({
    id: challengeId,
  })

  const langs = getCodeChallenge.langDetails
    .map((langDetail) => langDetail.lang)
    .join(',')

  const description = `Difficult: ${getCodeChallenge.difficult}\nAvailable langs: ${langs}`

  return {
    title: getCodeChallenge.title,
    description,
    openGraph: {
      description,
      images: ['/logos/cat-chad.png'],
    },
  }
}

const Layout = ({ children }: Props) => {
  return (
    <main className="relative w-full z-10 flex flex-row flex-wrap justify-start gap-8 flex-1 h-[calc(100dvh-8rem)] px-6">
      {children}
    </main>
  )
}

export default Layout
