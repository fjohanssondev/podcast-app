'use client'

import { usePathname, useRouter } from "next/navigation"

const GoBack = () => {

  const router = useRouter()
  const pathname = usePathname()

  return (
   <>
    {pathname !== '/' && <button className="mb-8 text-sm font-medium" onClick={router.back}>{'<--'} Go back</button>}
   </> 
  )
}

export default GoBack