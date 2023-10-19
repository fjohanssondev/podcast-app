import React from 'react'

const Volume = () => {
  return (
    <div className='flex'>
      <label className='sr-only' htmlFor="volume">Volume</label>
      <input type="range" id="volume" name="volume" min="0" max="100" />
    </div>
  )
}

export { Volume }