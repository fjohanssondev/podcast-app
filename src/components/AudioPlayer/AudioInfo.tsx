import { Avatar, Text } from '@radix-ui/themes'
import React from 'react'

const AudioInfo = () => {
  return (
    <div className='flex items-center gap-3'> 
      <Avatar src='https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop' fallback="A" />
      <div className='flex flex-col'>
        <Text className='text-white text-sm' weight="medium">Song Title</Text>
        <Text className='text-zinc-900 text-xs' weight="light">Artist Name</Text>
      </div>
    </div>
  )
}

export { AudioInfo }