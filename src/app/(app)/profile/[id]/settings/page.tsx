import { redirect } from "next/navigation"

export default async function Settings({ params }: { params: { id: string } }) {

  return (
    <section>
      <h1 className='text-4xl font-bold'>Settings</h1>
    </section>
  )
}