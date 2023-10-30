import React, { useEffect, useState } from 'react'
import { formatTime } from '@/utils/formatTime'
import { useAudioStore } from '@/store/audioStore';

const Timeline = () => {

  const { audioRef } = useAudioStore();
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    if (audioRef) {
      setDuration(audioRef.duration)
      setCurrentTime(audioRef.currentTime)
      console.log(audioRef.duration)
    }
    console.log(formatTime(duration))
    console.log(formatTime(currentTime))
    }, [audioRef, duration, currentTime])

  return (
    <div className='flex flex-1 items-center px-4'>
      <span className='font-light dark:text-white text-xs mr-2'>{formatTime(currentTime)}</span>
      <progress className="flex-1 h-2 [&::-webkit-progress-bar]:bg-slate-400 [&::-webkit-progress-value]:bg-orange-800 [&::-moz-progress-bar]:bg-ruby-700" value='30' max='100' />
      <span className='font-light dark:text-white text-xs ml-2'>{formatTime(duration)}</span>
    </div>
  )
}

export { Timeline }