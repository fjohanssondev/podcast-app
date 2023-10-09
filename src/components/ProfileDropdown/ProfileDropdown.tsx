'use client'

import { useState } from "react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import Image from "next/image"

import { ChevronIcon } from "@/icons/ChevronIcon"
import useOutsideClick from "@/hooks/useClickOutside"

const ProfileDropdown = () => {

  const { data: session } = useSession();

  const [isOpen, setIsOpen] = useState(false)

  const handleOutsideClick = () => setIsOpen(false)

  const ref = useOutsideClick<HTMLButtonElement>(handleOutsideClick)

  return (
   <>
    <button ref={ref} onClick={() => setIsOpen(prev => !prev)} className='flex items-center gap-2'>
      <Image className='rounded-full' src={session?.user.image as string || session?.user.name?.charAt(0) as string} alt={session?.user.name as string} width={40} height={40} />
      <span className='text-sm font-medium'>{session?.user.name}</span>
      <ChevronIcon direction='down' color='black' />
    </button>
    {isOpen && (
      <div className='absolute border border-slate-200 top-12 right-0 w-48 bg-white rounded shadow-sm py-2'>
        <Link href="/profile" className='block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900'>View Profile</Link>
        <Link href="/settings" className='block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900'>Settings</Link>
        <div className='border-b my-2 border-gray-100'></div>
        <Link href='/api/auth/signout' className='block px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-100'>Sign out</Link>
      </div>
    )}
   </>
  )
}

export default ProfileDropdown