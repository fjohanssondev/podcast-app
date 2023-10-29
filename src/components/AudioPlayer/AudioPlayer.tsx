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
    <div className='relative bg-white pt-8 pb-6'>
      <button onClick={() => signOut()}>Sign out</button>
      <button onClick={() => signIn("github")}>Sign in</button>
      <audio ref={audioRef} src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' />
      <Timeline audioRef={audioRef} />
      <div className='container mx-auto px-4'>
        <div className='flex items-center text-black justify-between z-10'>
          <AudioInfo />
          <Controls audioRef={audioRef} />
          <Volume audioRef={audioRef} />
        </div>
      </div>
    </div>
  )
}

export { AudioPlayer }