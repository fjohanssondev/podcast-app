'use client'

import NextIcon from '@/icons/NextIcon'
import PauseIcon from '@/icons/PauseIcon'
import PlayIcon from '@/icons/PlayIcon'
import PreviousIcon from '@/icons/PreviousIcon'
import React, { useState } from 'react'

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
    <div className='flex items-center gap-2'>
      <button aria-label="Play the previous song">
        <PreviousIcon type="solid" size="md" />
      </button>
      <button onClick={handlePlayPause} aria-pressed={isPlaying} aria-label={isPlaying ? "Pause the song" : "Play the song"}>
        {isPlaying ? <PauseIcon type="solid" size="lg" /> : <PlayIcon type="solid" size="lg" />}
      </button>
      <button aria-label="Play the next song">
        <NextIcon type="solid" size="md" />
      </button>
    </div>
  )

}

export { Controls }