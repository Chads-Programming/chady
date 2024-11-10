'use client'
import { ProfileBanner } from '@/app/auth/components/profile-banner'
import { cn } from '@repo/ui'
import { Github, Map as MapIcon, Youtube } from 'lucide-react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const ThemeToggler = dynamic(
  () => import('@repo/ui/theme').then((mod) => mod.ThemeToggler),
  { ssr: false },
)

export const Header = () => {
  const currentPath = usePathname()

  return (
    <header className="w-full border-b">
      <nav className="bg-background flex flex-row gap-2 justify-between items-center h-14 px-8">
        <div className="flex gap-4 items-center text-sm font-medium ">
          <Link
            href="/"
            className="font-mono font-bold text-2xl bg-gradient-primary px-2 py-1 rounded-md"
          >
            <span className="text-white dark:text-zinc-950">Chady</span>
          </Link>
          <Link
            className={cn(
              'border border-border rounded-md px-2 py-1 inline-flex gap-2 items-center text-sm font-medium hover:text-foreground text-foreground/80 transition-colors',
              {
                underline: currentPath === '/challenges',
              },
            )}
            href="/challenges"
          >
            <MapIcon className="w-4 h-4" /> Explore
          </Link>
        </div>
        <div className="flex flex-row justify-between items-center gap-2">
          <ThemeToggler />
          <div className="flex flex-row gap-2 justify-center items-centers box-border rounded-md py-1 px-2 border border-border">
            <Link
              className="hover:text-foreground text-foreground/80 transition-colors"
              target="_blank"
              href="https://github.com/Chads-Programming/chady"
            >
              <Github suppressHydrationWarning />
            </Link>
            <Link
              className="hover:text-foreground text-foreground/80 transition-colors"
              target="_blank"
              href="https://www.youtube.com/@ChadsProgramming"
            >
              <Youtube suppressHydrationWarning />
            </Link>
          </div>
          <ProfileBanner />
        </div>
      </nav>
    </header>
  )
}
