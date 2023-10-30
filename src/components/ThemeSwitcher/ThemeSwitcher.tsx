'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon } from '@/icons/SunIcon'
import { MoonIcon } from '@/icons/MoonIcon'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      {theme === 'dark' ? (
        <button aria-label='Switch to light theme' className='hover:bg-zinc-50 p-2 rounded-sm' onClick={() => setTheme('light')}>
          <SunIcon />
        </button>
      ) : (
        <button aria-label='Switch to dark theme' className='hover:bg-gray-100 p-2 rounded-sm' onClick={() => setTheme('dark')}>
          <MoonIcon color='black' />
        </button>
      )}
    </>
  )
}

export default ThemeSwitcher