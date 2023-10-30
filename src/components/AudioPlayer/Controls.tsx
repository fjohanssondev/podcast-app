'use client'

import React, { useState } from 'react'
import { PlayIcon, PauseIcon, TrackPreviousIcon, TrackNextIcon } from '@radix-ui/react-icons'

const Controls = ({ audioRef }: any) => {

  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play()
      setIsPlaying(true)
    } else {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div className='flex items-center gap-4'>
      <button aria-label="Play the previous song">
        <TrackPreviousIcon width={20} height={20} className='dark:text-white' type="solid" />
      </button>
      <button className='border border-gray-400 rounded-full p-2' onClick={handlePlayPause} aria-pressed={isPlaying} aria-label={isPlaying ? "Pause the song" : "Play the song"}>
        {isPlaying ? <PauseIcon width={20} height={20} className='dark:text-white' type="solid" /> : <PlayIcon width={20} height={20} className='dark:text-white' type="solid" />}
      </button>
      <button aria-label="Play the next song">
        <TrackNextIcon width={20} height={20} className='dark:text-white' type="solid" />
      </button>
    </div>
  )

}

export { Controls }