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
    <div className='flex items-center absolute px-4 top-0 w-full'>
      <progress className="flex-1 h-2 [&::-webkit-progress-bar]:bg-slate-200 [&::-webkit-progress-value]:bg-orange-400 [&::-moz-progress-bar]:bg-orange-400" value='30' max='100' />
      <span className='font-semibold text-sm ml-4'>{formatTime(duration)}</span>
    </div>
  )
}

export { Timeline }