'use client'

import React, { useEffect, useRef } from 'react'
import { AudioInfo } from './AudioInfo'
import { Controls } from './Controls'
import { Volume } from './Volume'
import { Timeline } from './Timeline'
import { useAudioStore } from '@/store/audioStore'

const AudioPlayer = () => {

  const audioRef = useRef<HTMLAudioElement>(null)
  const setAudioRef = useAudioStore(state => state.setAudioRef)

  useEffect(() => {
    setAudioRef(audioRef.current)
    return () => setAudioRef(null)
  }, [setAudioRef])
  
  const progressBarRef = useRef<HTMLProgressElement>(null)

  return (
    <div className='fixed w-full shadow-lg bottom-0 bg-[#161616] py-5'>
      <audio ref={audioRef} src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' />
      <div className='px-24'>
        <div className='flex items-center text-black justify-between z-10 gap-36'>
          <AudioInfo />
          <Controls />
          <Timeline />
          <Volume />
        </div>
      </div>
    </div>
  )
}

export { AudioPlayer }