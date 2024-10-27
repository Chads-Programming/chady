import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Challenges',
  description: 'Code challenges for chad programming community',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
