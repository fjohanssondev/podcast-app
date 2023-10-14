'use client'

import React, { useContext, useEffect, useId, useRef } from 'react'
import { DialogContext } from './DialogRoot'
import { CloseIcon } from '@/icons/CloseIcon'

interface DialogContentProps {
  children?: React.ReactNode;
  title: string;
  description: string;
}

const DialogContent = (props: DialogContentProps) => {

  const { isOpen, closeDialog } = useContext(DialogContext)
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      const modalElement = modalRef.current;
      if (!modalElement) return;

      const focusableElements = modalElement.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (firstElement){
        firstElement.focus();
      }

      const handleTabKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Tab") {
          if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          } else if (
            !event.shiftKey &&
            document.activeElement === lastElement
          ) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      };

      const handleEscapeKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          closeDialog();
        }
      };

      modalElement.addEventListener("keydown", handleTabKeyPress);
      modalElement.addEventListener("keydown", handleEscapeKeyPress);

      return () => {
        modalElement.removeEventListener("keydown", handleTabKeyPress);
        modalElement.removeEventListener("keydown", handleEscapeKeyPress);
      };
    }
  }, [isOpen, closeDialog]);

  const titleId = useId()
  const descriptionId = useId()

  return (
      <React.Fragment>
        {isOpen && <div className="fixed inset-0 bg-black/30 bg-opacity-75 transition-opacity"></div>}
        <dialog
          className="relative z-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          ref={modalRef}
          open={isOpen}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="flex flex-col relative py-4 px-6 transform overflow-hidden rounded-sm bg-white dark:bg-gray-700 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <button aria-label='Close the dialog' className='self-end' onClick={closeDialog}>
            <CloseIcon color='black' />
          </button>
          <div>
            <h3 id={titleId} className='text-lg font-semibold'>{props.title}</h3>
            <p id={descriptionId} className='text-sm leading-relaxed'>{props.description}</p>
          </div>
          <div className='mt-2'>
            {props.children}
          </div>
          </div>
          </div>
          </div>
        </dialog>
      </React.Fragment>
  )
}

export { DialogContent }