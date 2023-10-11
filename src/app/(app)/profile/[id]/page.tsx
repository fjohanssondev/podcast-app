import Avatar from '@/components/Avatar'
import { getCurrentSession } from '@lib/getCurrentSession'

export default async function Profile({ params }: { params: { id: string } }) {

  const session = await getCurrentSession()

  return (
    <section>
      <h1 className='text-4xl font-bold'>Profile - {params.id}</h1>
      <section className='mt-16' aria-label='Profile summary'>
        <div className='flex items-center'>
          <Avatar image={session?.user.image ?? ''} name={session?.user.name ?? ''} size='lg' />
          <div className='ml-12'>
            <h2 className='text-5xl font-bold text-black dark:text-white'>{session?.user.name}</h2>
            <p className='text-sm max-w-xl mt-6 leading-loose'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>
      </section>
      <section aria-label='Playlists'></section>
    </section>
  )
}
