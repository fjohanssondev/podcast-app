import { getCurrentSession } from '@lib/getCurrentSession'
import Image from 'next/image'

export default async function Home() {

  const session = await getCurrentSession()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{session?.user?.email || 'No current user'}</h1>
    </main>
  )
}
