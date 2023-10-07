import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SessionProvider from '@components/Providers/SessionProvider'
import QueryProvider from '@components/Providers/QueryProvider'
import { getCurrentSession } from '@lib/getCurrentSession'
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin'
import { extractRouterConfig } from 'uploadthing/server'
import { ourFileRouter } from './api/uploadthing/core'

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
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <QueryProvider>
            <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
            {children}
          </QueryProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
