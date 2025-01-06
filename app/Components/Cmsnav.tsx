import { Lilita_One } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import { BackIcon } from './Icons'

const font= Lilita_One({weight:'400', subsets:['latin']})
const Cmsnav = () => {
  return (
    <div className='flex justify-between items-center p-5'>
        <Link href="/" className='text-purple-500'>
        <BackIcon />
        </Link>
        <Link href="/">
            <div className={`${font.className} text-3xl text-amber-50 `}>Blog
              <span className='text-purple-500'>Logo</span>
            </div>
            </Link>
      
    </div>
  )
}

export default Cmsnav
