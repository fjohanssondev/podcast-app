'use client'

import React, { useRef } from 'react'
import { AudioInfo } from './AudioInfo'
import { Controls } from './Controls'
import { Volume } from './Volume'
import { Timeline } from './Timeline'

const AudioPlayer = () => {

  const audioRef = useRef<HTMLAudioElement>(null)

  return (
    <div className='relative bg-white pt-8 pb-6'>
      <audio src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' />
      <Timeline />
      <div className='container mx-auto px-4'>
        <div className='flex items-center text-black justify-between z-10'>
          <AudioInfo />
          <Controls />
          <Volume />
        </div>
      </div>
    </div>
  )
}

export { AudioPlayer }