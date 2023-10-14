'use client'

import { useState } from "react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { ChevronIcon } from "@/icons/ChevronIcon"
import useOutsideClick from "@/hooks/useClickOutside"
import Avatar from "@components/Avatar"

const ProfileDropdown = () => {

  const { data: session } = useSession();

  const [isOpen, setIsOpen] = useState(false)

  const handleOutsideClick = () => setIsOpen(false)

  const ref = useOutsideClick<HTMLButtonElement>(handleOutsideClick)

  return (
   <>
    <button aria-haspopup="true" ref={ref} onClick={() => setIsOpen(prev => !prev)} className='flex items-center gap-2'>
      <Avatar size="sm" name={session?.user.name ?? ''} image={session?.user.image ?? ''} />
      <span className='text-sm font-medium'>{session?.user.name}</span>
      <ChevronIcon direction='down' color='black' />
    </button>
    {isOpen && (
      <div role="menu" className='absolute border border-slate-200 top-12 right-0 w-48 bg-white dark:bg-gray-800 dark:border-gray-700 rounded shadow-sm py-2'>
        <Link href={`/profile/${session?.user.id}`} className='block px-4 py-2 text-sm font-medium text-gray-700 dark:dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900'>View Profile</Link>
        <Link href="/settings" className='block px-4 py-2 text-sm font-medium text-gray-700 dark:dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900'>Settings</Link>
        <div className='border-b my-2 border-gray-100 dark:border-gray-600'></div>
        <Link href='/api/auth/signout' className='block px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-100 dark:text-red-400 dark:hover:bg-gray-900 dark:hover:text-white'>Sign out</Link>
      </div>
    )}
   </>
  )
}

export default ProfileDropdown