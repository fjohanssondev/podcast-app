import '../globals.css'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SessionProvider from '@components/Providers/SessionProvider'
import QueryProvider from '@components/Providers/QueryProvider'
import { getCurrentSession } from '@lib/getCurrentSession'
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin'
import { extractRouterConfig } from 'uploadthing/server'
import { ourFileRouter } from '../api/uploadthing/core'
import ThemeProvider from '@/components/Providers/ThemeProvider'
import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sonare | Find your next favorite podcast',
  description: 'Sonare is a podcast discovery platform that helps you find your next favorite podcast.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getCurrentSession()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(inter.className, 'min-h-screen text-black bg-purple-400 dark:text-white dark:bg-gradient-to-t dark:from-black dark:to-darkBlue')}>
        <SessionProvider session={session}>
          <QueryProvider>
            <ThemeProvider>
              <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
              {children}
              <ThemeSwitcher />
            </ThemeProvider>
          </QueryProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
