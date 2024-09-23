'use client'

import { Onest } from 'next/font/google'
import { Header } from './shared/components/header'
import { ThemeProvider } from './shared/components/theme-provider'
import './globals.css'

import '@repo/ui/globals.css'
import { NavigationProgress } from './shared/components/navigation-progress'
import { FetchingProvider } from './shared/providers/fetching-provider'

const onest = Onest({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${onest.variable} bg-background`}>
        <NavigationProgress />
        <FetchingProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Header />
            {children}
          </ThemeProvider>
        </FetchingProvider>
      </body>
    </html>
  )
}
