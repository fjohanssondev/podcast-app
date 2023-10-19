import ProfileDetails from '@/components/Profile/ProfileDetails'

export default async function Profile({ params }: { params: { id: string } }) {

  return (
    <section>
      <h1 className='text-4xl font-bold'>Profile</h1>
      <section className='mt-16' aria-label='Profile summary'>
        <div className='flex items-start'>
          <ProfileDetails id={params.id} />
        </div>
      </section>
      <section aria-label='Playlists'></section>
    </section>
  )
}
