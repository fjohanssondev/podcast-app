'use client'

import { createPortal } from 'react-dom'

const DialogPortal = ({ children }: { children: React.ReactNode }) => {
  return createPortal(
    children,
    document.body
  )
}

export { DialogPortal }