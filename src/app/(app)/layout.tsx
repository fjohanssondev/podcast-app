import '../globals.css'
import '@radix-ui/themes/styles.css';
import '@base/theme-config.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin'
import { extractRouterConfig } from 'uploadthing/server'
import { ourFileRouter } from '../api/uploadthing/core'
import { auth } from '@base/auth'
import clsx from 'clsx'

import SessionProvider from '@components/Providers/SessionProvider'
import QueryProvider from '@components/Providers/QueryProvider'
import ThemeProvider from '@/components/Providers/ThemeProvider'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import GoBack from '@/components/GoBack'
import { AudioPlayer } from '@/components/AudioPlayer'

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

  const session = await auth()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(inter.className, 'dark:bg-dark-primary flex flex-col min-h-screen text-black')}>
        <SessionProvider session={session}>
          <QueryProvider>
            <ThemeProvider>
              <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
              <div className='flex flex-1 h-screen'>
                <Sidebar />
                <div className='relative flex flex-col flex-1 ml-64'>
                  <Header />
                  <main className='flex flex-1'>
                    <div className='container px-12 py-10'>
                      <GoBack />
                      {children}
                    </div>
                  </main>
                </div>
              </div>
              <AudioPlayer />
            </ThemeProvider>
          </QueryProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
