'use client'

import { createContext, useState } from 'react'

interface DialogContext {
  isOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
}

export const DialogContext = createContext<DialogContext>({
  isOpen: false,
  openDialog: () => {},
  closeDialog: () => {},
});

const DialogRoot = ({ children }: { children: React.ReactNode }) => {

  const [isOpen, setIsOpen] = useState(false)

  const openDialog = () => setIsOpen(true)
  const closeDialog = () => setIsOpen(false)

  return (
    <DialogContext.Provider value={{ isOpen, openDialog, closeDialog }}>
      {children}
    </DialogContext.Provider>
  )
}

export { DialogRoot }