'Use client';

import React, { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

interface Props{
    children: React.ReactNode;
}

const ThProvider = ({ children }: Props) => {
  return (
    <ThemeProvider attribute="class">
        {children}
    </ThemeProvider>
  )
}

export default ThProvider
