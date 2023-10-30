import React, { useEffect, useState } from 'react'
import { formatTime } from '@/utils/formatTime'

const Timeline = ({ audioRef }: any) => {

  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
      if (audioRef.current) {
        setDuration(audioRef.current.duration)
        setCurrentTime(audioRef.current.currentTime)
      }
      console.log(formatTime(duration))
      console.log(formatTime(currentTime))
    }, [audioRef.current])

  return (
    <div className='flex items-center px-4'>
      <progress className="flex-1 h-2 [&::-webkit-progress-bar]:bg-slate-400 [&::-webkit-progress-value]:bg-ruby-700 [&::-moz-progress-bar]:bg-ruby-700" value='30' max='100' />
      <span className='font-light dark:text-white text-xs ml-2'>{formatTime(currentTime)} / {formatTime(duration)}</span>
    </div>
  )
}

export { Timeline }