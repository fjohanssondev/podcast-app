'use client'

import React from 'react'

const Volume = ({ audioRef }: any) => {

  const handleVolumeChange = (e: any) => audioRef.current.volume = e.target.value / 100

  return (
    <div className='flex'>
      <label className='sr-only' htmlFor="volume">Volume</label>
      <input onChange={handleVolumeChange} type="range" id="volume" name="volume" min="0" max="100" />
    </div>
  )
}

export { Volume }