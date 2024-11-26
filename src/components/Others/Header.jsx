import React from 'react'

const Header = () => {
  return (
    <div className='w-full px-6 py-4 flex items-center justify-between rounded-lg bg-gradient-to-r from-black/20 via-black/10 to-green-950'>
        <h1 className='text-2xl font-medium'>Hello,<br /> 
            <span className='text-3xl font-semibold'>Siddhart 👋</span>
        </h1>
        <button className='py-2 px-8 border-2 text-red-300 hover:text-white transition-all duration-300500 border-red-400 rounded-lg hover:bg-red-400 text-sm md:text-lg font-semibold' >Log Out</button>
    </div>
  )
}

export default Header