'use client'

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Avatar from '@components/Avatar'
import FollowStats from '@components/FollowStats';


interface ProfileDetailsProps {
  id: string,
}

export interface User {
  id: string;
  name: string;
  email: string;
  emailVerified?: Date;
  image: string;
}

const ProfileDetails = (props: ProfileDetailsProps) => {

  const { data, isLoading } = useQuery<User>({
    queryKey: ['profile', props.id],
    queryFn: async () => {
      const response = await fetch(`/api/users/getUserById?id=${props.id}`)
      const data: User = await response.json()
      return data
    }
  })

  return (
    <>
      <Avatar image={data?.image ?? ''} name={data?.name ?? ''} size='lg' />
      <div className='ml-16'>
        <h2 className='text-5xl font-bold text-black dark:text-white'>{data?.name}</h2>
        <p className='text-sm font-medium max-w-xl mt-6 leading-loose'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <FollowStats />
      </div>
    </>
  )
}

export default ProfileDetails