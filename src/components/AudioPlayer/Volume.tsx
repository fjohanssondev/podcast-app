'use client'

import React from 'react'
import { Slider } from '@radix-ui/themes'
import { SpeakerLoudIcon, SpeakerModerateIcon, SpeakerQuietIcon, SpeakerOffIcon } from '@radix-ui/react-icons'

const Volume = ({ audioRef }: any) => {

  const handleVolumeChange = (e: any) => audioRef.current.volume = e.target.value / 100

  console.log('From the volumne comp', audioRef.current.volume)

  return (
    <div className='flex items-center'>
      <SpeakerLoudIcon className='text-white mr-4' width={20} height={20} />
      <Slider onChange={handleVolumeChange} className='w-32' defaultValue={[30]} />
    </div>
  )
}

export { Volume }