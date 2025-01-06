'use client'

import React from 'react'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcons, SunIcons } from './Icons'
const ThemeSwitch = () => {
     const { theme, setTheme } = useTheme();
     const [mounted, setMounted] = useState(false);

     useEffect( () => {
        setMounted(true)
     }, [])

     if (!mounted){
        return null
     }
  return( 
    <button className='border border-purple-500 rounded-2xl hover:bg-purple-400 ' onClick={ () => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? <SunIcons /> : <MoonIcons/>}
    </button>
  )
}

export default ThemeSwitch
