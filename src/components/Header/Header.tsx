"use client"

import Search from '@components/Search';
import { Avatar, DropdownMenu } from '@radix-ui/themes';
import { useSession } from 'next-auth/react';
import { CaretDownIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import ThemeSwitcher from '../ThemeSwitcher';

const Header = () => {

  const { data } = useSession()

  return (
    <header className="bg-white dark:bg-transparent dark:border-0 py-6">
      <div className='flex items-center justify-between min-w-full container px-12'>
        <span aria-hidden="true"></span>
        <div className='flex-1'>
          <Search />
        </div>
        <div className='flex items-center gap-8'>
          <div className='relative flex gap-4'>
            <ThemeSwitcher />
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <div className='flex items-center gap-2'>
                  <Avatar
                    src={data?.user?.image || ''}
                    fallback={data?.user?.name?.charAt(0) || ''}
                  />
                  <CaretDownIcon />
                </div>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item shortcut="⌘ P">
                  <Link href={`/profile/${data?.user.id}`}>My Profile</Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item shortcut="⌘ S">Settings</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
                  Logout
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header