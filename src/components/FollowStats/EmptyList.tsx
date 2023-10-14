import SadIcon from '@/icons/SadIcon'
import React from 'react'

interface EmptyListProps {
  message: string
}

const EmptyList = ({ message }: EmptyListProps) => {
  return (
    <div className='bg-slate-100 p-4 mt-4 rounded-sm flex flex-col items-center'>
      <SadIcon color='black' />
      <p className="leading-8">You don&apos;t have any {message} yet.</p>
    </div>
  )
}

export default EmptyList