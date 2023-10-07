import { getCurrentSession } from '@lib/getCurrentSession'

export default async function Dashboard() {

  const session = await getCurrentSession()

  return (
    <main className="flex flex-col items-center p-24">
      <h1>{JSON.stringify(session?.user) || "No current user"}</h1>
    </main>
  )
}
