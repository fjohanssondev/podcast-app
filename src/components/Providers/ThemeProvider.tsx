'use client'

import { ThemeProvider as ThemeProviderWrapper } from 'next-themes'
import { Theme } from '@radix-ui/themes';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProviderWrapper attribute="class">
      <Theme>
        {children}
      </Theme>
    </ThemeProviderWrapper>
  )
}