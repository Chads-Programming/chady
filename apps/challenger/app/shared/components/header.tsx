'use client'
import { ProfileBanner } from '@/app/auth/components/profile-banner'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const ThemeToggler = dynamic(
  () => import('@repo/ui/theme').then((mod) => mod.ThemeToggler),
  { ssr: false },
)

export const Header = () => {
  return (
    <header className="w-full border-b">
      <nav className="bg-background flex flex-row gap-2 justify-between items-center h-14 px-8">
        <div className="flex gap-4 items-center text-sm font-medium ">
          <Link
            href="/"
            className="font-mono font-bold text-2xl text-primary border border-primary rounded-md px-2 py-1"
          >
            <span className="text-gradient-primary">Chady</span>
          </Link>
          <Link
            className="hover:text-foreground text-foreground/80 transition-colors"
            href="/challenges"
          >
            Explore
          </Link>
        </div>
        <div className="flex flex-row gap-2 justify-between items-center">
          <ThemeToggler />
          <ProfileBanner />
        </div>
      </nav>
    </header>
  )
}
