'use client'

import React, { useState } from 'react'
import { PlayIcon, PauseIcon, TrackPreviousIcon, TrackNextIcon } from '@radix-ui/react-icons'
import { useAudioStore } from '@/store/audioStore';

const Controls = () => {

  const { audioRef } = useAudioStore();
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayPause = () => {
    if (audioRef){
      if (audioRef.paused) {
        audioRef.play()
        setIsPlaying(true)
      } else {
        audioRef.pause()
        setIsPlaying(false)
      }
    }
  }

  return (
    <div className='flex items-center gap-4'>
      <button aria-label="Play the previous song">
        <TrackPreviousIcon width={20} height={20} className='dark:text-white' type="solid" />
      </button>
      <button className='border border-white rounded-full p-2' onClick={handlePlayPause} aria-pressed={isPlaying} aria-label={isPlaying ? "Pause the song" : "Play the song"}>
        {isPlaying ? <PauseIcon width={20} height={20} className='dark:text-white' type="solid" /> : <PlayIcon width={20} height={20} className='dark:text-white' type="solid" />}
      </button>
      <button aria-label="Play the next song">
        <TrackNextIcon width={20} height={20} className='dark:text-white' type="solid" />
      </button>
    </div>
  )

}

export { Controls }