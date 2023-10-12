'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const DialogPortal = ({ children }: { children: React.ReactNode }) => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const newContainer = document.createElement('div');
    document.body.appendChild(newContainer);

    setContainer(newContainer);

    return () => {
      document.body.removeChild(newContainer);
    };
  }, [])

  if (!container) return null;
  
  return createPortal(children, container);
}

export { DialogPortal }