'use client'

import React from 'react'
import { Slider } from '@radix-ui/themes'
import { SpeakerLoudIcon, SpeakerModerateIcon, SpeakerQuietIcon, SpeakerOffIcon } from '@radix-ui/react-icons'
import { useAudioStore } from '@/store/audioStore'

const Volume = () => {

  const { audioRef } = useAudioStore();
  const [isMuted, setIsMuted] = React.useState(false)

  const handleVolumeChange = (values: number[]) => {
    if (audioRef){
      audioRef.volume = values[0] / 100

      if (audioRef.volume > 0) {
        setIsMuted(false)
      } else {
        setIsMuted(true)
      }
      console.log(audioRef.volume)
    }
  }

  const handleMute = () => {
    if (audioRef) {
      audioRef.muted = !audioRef.muted
      console.log(audioRef.muted)
      audioRef.volume = audioRef.muted ? 0 : 0.3
      setIsMuted(audioRef.muted)
    }
  }

  return (
    <div className='flex items-center'>
      <button onClick={handleMute} aria-label={isMuted ? "Turn on the volume" : "Mute the volume"}>
        {isMuted ? (
          <SpeakerOffIcon className='text-white mr-4' width={20} height={20} />
          ) : (
          <SpeakerLoudIcon className='text-white mr-4' width={20} height={20} />
        )}
      </button>
      <Slider aria-label='Volume' onValueChange={handleVolumeChange} className='w-32' defaultValue={[30]} max={100} />
    </div>
  )
}

export { Volume }