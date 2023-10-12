'use client'

import React, { useContext } from 'react'
import { DialogContext } from './DialogRoot'
import { CloseIcon } from '@/icons/CloseIcon'

interface DialogContentProps {
  children?: React.ReactNode;
  title: string;
  description: string;
}

const DialogContent = (props: DialogContentProps) => {

  const { isOpen, closeDialog } = useContext(DialogContext)

  return (
    <dialog className="relative z-10" role="dialog" aria-modal="true" open={isOpen}>
      <div className="fixed inset-0 bg-black/30 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div className="flex flex-col relative p-4 transform overflow-hidden rounded-sm bg-white dark:bg-gray-700 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
      <button className='self-end' onClick={closeDialog}>
        <CloseIcon color='black' />
      </button>
      <div>
        <h3 className='text-lg font-semibold'>{props.title}</h3>
        <p className='text-sm leading-loose'>{props.description}</p>
      </div>
      <div className='mt-2'>
        {props.children}
      </div>
      </div>
      </div>
      </div>
    </dialog>
  )
}

export { DialogContent }