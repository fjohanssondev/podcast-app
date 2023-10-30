'use client'

import React, { useRef } from 'react'
import { AudioInfo } from './AudioInfo'
import { Controls } from './Controls'
import { Volume } from './Volume'
import { Timeline } from './Timeline'
import { signIn, signOut } from 'next-auth/react'

const AudioPlayer = () => {
  
  const audioRef = useRef<HTMLAudioElement>(null)
  const progressBarRef = useRef<HTMLProgressElement>(null)

  return (
    <div className='fixed w-full shadow-lg bottom-0 bg-[#161616] py-5'>
      <audio ref={audioRef} src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' />
      <div className='px-8'>
        <div className='flex items-center text-black justify-between z-10'>
          <AudioInfo />
          <Controls audioRef={audioRef} />
          <Timeline audioRef={audioRef} />
          <Volume audioRef={audioRef} />
        </div>
      </div>
    </div>
  )
}

export { AudioPlayer }