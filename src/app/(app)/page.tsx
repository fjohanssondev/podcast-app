import { getCurrentSession } from '@lib/getCurrentSession'

export default async function Dashboard() {

  const session = await getCurrentSession()

  return (
    <section>
      <h1>{JSON.stringify(session?.user) || "No current user"}</h1>
    </section>
  )
}
