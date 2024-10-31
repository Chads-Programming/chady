'use client'

import { Header } from './shared/components/header'
import './globals.css'

import '@repo/ui/globals.css'
import { ThemeProvider } from '@repo/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { NavigationProgress } from './shared/components/navigation-progress'
import { FetchingProvider } from './shared/providers/fetching-provider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} bg-background`}
      >
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
