import React from 'react'
import alchemystLOogo from '@/assets/alchemysticon.jpeg'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='w-full py-5 px-4 max-h-max flex flex-row justify-between mobile:justify-around items-center sticky backdrop-blur-sm top-0 left-0 text-tertiary xs:py-2 xs:px-1 z-100'>
        <div className='max-w-max flex flex-row justify-between items-center gap-4 font-serif'>
            <Image src={alchemystLOogo} alt='alchemyst-logo' width={50} height={50} className='rounded-full' />
            <p className='font-Enriqueta font-semibold hidden'>Alchemyst-ai</p>
        </div>

        <div className='max-w-max flex-row justify-center items-center gap-4 font-Enriqueta font-semibold text-tertiary hidden mobile:flex'>
            <p className='cursor-pointer hover:text-tertiary'>Home</p>
            <p className='cursor-pointer hover:text-tertiary'>Services</p>
            <p className='cursor-pointer hover:text-tertiary'>Contact</p>
        </div>
        
        <div className='max-w-max flex-row justify-center items-center gap-2 font-Enriqueta font-semibold hidden mobile:flex'>
            <p className='border-2 border-tertiary border-solid py-2 px-4 rounded-lg'>Sign in</p>
            <p className='border-2 border-tertiary border-solid py-2 px-4 rounded-lg'>Sign up</p>
        </div>

        <div className='px-4 mobile:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-tertiary cursor-pointer mobile:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </div>
    </div>
  )
}

export default Navbar