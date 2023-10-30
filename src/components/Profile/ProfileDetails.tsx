'use client'

import React from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import FollowStats from '@components/FollowStats';
import { useSession } from 'next-auth/react';
import { LocationIcon } from '@/icons/LocationIcon';
import { Avatar } from '@radix-ui/themes';

interface ProfileDetailsProps {
  id: string
}

export interface User {
  id: string
  name: string
  email: string
  emailVerified?: Date
  image: string
  following: User[]
  followedBy: User[]
  profile: {
    bio: string
    location: string
  }
}

const ProfileDetails = (props: ProfileDetailsProps) => {

  const { data: session } = useSession()

  const { data, isLoading } = useQuery<User>({
    queryKey: ['profile', props.id],
    queryFn: async () => {
      const response = await fetch(`/api/users/getUserById?id=${props.id}`)
      const data: User = await response.json()
      return data
    }
  })

 /*  const mutation = useMutation(async (user: User) => {
    mutationFn: (newFollower: User) => {
      return fetch('/api/users/follow', {
        method: 'POST',
        body: JSON.stringify(newFollower),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
  }) */

  const isAllowedToFollow = () => {
    if (session?.user.id !== props.id){
      return true
    }
  }

  const canFollow = isAllowedToFollow()
  
  return (
    <>
      <Avatar src={data?.image ?? ''} fallback={data?.name.charAt(0) || 'A'} size='3' />
      <div className='ml-16'>
        <h2 className='text-5xl font-bold text-black dark:text-white'>{data?.name}</h2>
        <p className='text-sm mb-4 font-medium max-w-xl mt-6 leading-loose'>{data?.profile?.bio ?? "This user hasn't written a bio about themself yet.."}</p>
        {data?.profile?.location && (
          <span className='flex items-center gap-1 text-sm'>
            <LocationIcon color='black' />
            {data?.profile.location}
          </span>
        )}
        <FollowStats following={data?.following ?? []} followers={data?.followedBy ?? []} />
        {canFollow && <button className='bg-orange-300 px-4 py-2 rounded-sm mt-12'>Follow the user</button>}
      </div>
    </>
  )
}

export default ProfileDetails