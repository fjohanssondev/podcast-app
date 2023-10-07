'use client'

import { ThemeProvider as ThemeProviderWrapper } from 'next-themes'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProviderWrapper attribute="class">{children}</ThemeProviderWrapper>
}