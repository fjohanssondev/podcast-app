'use client'

import { ThemeProvider as ThemeProviderWrapper } from 'next-themes'
import { Theme } from '@radix-ui/themes';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  /* return <ThemeProviderWrapper attribute="class">{children}</ThemeProviderWrapper> */

  return (
    <Theme appearance="dark" accentColor="orange" grayColor="mauve" panelBackground="solid" radius="small">
      {children}
    </Theme>
  )
}