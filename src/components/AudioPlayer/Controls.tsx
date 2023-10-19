'use client'

import NextIcon from '@/icons/NextIcon'
import PauseIcon from '@/icons/PauseIcon'
import PlayIcon from '@/icons/PlayIcon'
import PreviousIcon from '@/icons/PreviousIcon'
import React, { useState } from 'react'

const Controls = () => {

  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className='flex items-center gap-2'>
      <button aria-label="Play the previous song">
        <PreviousIcon type="solid" size="md" />
      </button>
      <button aria-pressed={isPlaying} aria-label={isPlaying ? "Pause the song" : "Play the song"} onClick={() => setIsPlaying(prev => !prev)}>
        {isPlaying ? <PauseIcon type="solid" size="lg" /> : <PlayIcon type="solid" size="lg" />}
      </button>
      <button aria-label="Play the next song">
        <NextIcon type="solid" size="md" />
      </button>
    </div>
  )

}

export { Controls }