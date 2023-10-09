import { getCurrentSession } from '@lib/getCurrentSession'

export default async function Dashboard() {

  const session = await getCurrentSession()

  return (
    <section>
      <h1 className='text-4xl font-bold'>Discover</h1>
    </section>
  )
}
