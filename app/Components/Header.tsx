
import React from 'react'

interface props{
    title: string,
}

const Header = ({ title="" }: props) => {
  return (
    <header className='py-16 text-2xl max-w-2xl mx-auto text-center mb-10 px-5 border-b dark:border-purple-500 border-gray-300'>
        <h2 className='font-bold uppercase'>{title}</h2>
    </header>

  )
}

export default Header
