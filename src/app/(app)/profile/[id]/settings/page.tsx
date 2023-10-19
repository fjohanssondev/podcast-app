import { getCurrentSession } from "@lib/getCurrentSession"
import { redirect } from "next/navigation"

export default async function Settings({ params }: { params: { id: string } }) {

  const session = await getCurrentSession()

  if (session?.user.id !== params.id){
    redirect('/')
  }

  return (
    <section>
      <h1 className='text-4xl font-bold'>Settings</h1>
    </section>
  )
}