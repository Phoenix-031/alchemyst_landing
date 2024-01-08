import React from 'react'
import alchemystLOogo from '@/assets/alchemysticon.jpeg'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='w-full py-5 px-4 max-h-max flex flex-row justify-around items-center sticky backdrop-blur-sm top-0 left-0 text-tertiary xs:py-2 xs:px-1'>
        <div className='max-w-max flex flex-row justify-center items-center gap-4 font-serif'>
            <Image src={alchemystLOogo} alt='alchemyst-logo' width={50} height={50} className='rounded-full' />
            <p className='font-Enriqueta font-semibold'>Alchemyst-ai</p>
        </div>
        <div className='max-w-max flex flex-row justify-center items-center gap-4 font-Enriqueta font-semibold text-tertiary'>
            <p className='cursor-pointer hover:text-tertiary'>Home</p>
            <p className='cursor-pointer hover:text-tertiary'>Services</p>
            <p className='cursor-pointer hover:text-tertiary'>Contact</p>
        </div>
        <div className='max-w-max flex flex-row justify-center items-center gap-4 font-Enriqueta font-semibold'>
            <p className='border-2 border-tertiary border-solid py-2 px-4 rounded-lg'>Sign in</p>
            <p className='border-2 border-tertiary border-solid py-2 px-4 rounded-lg'>Sign up</p>
        </div>
    </div>
  )
}

export default Navbar