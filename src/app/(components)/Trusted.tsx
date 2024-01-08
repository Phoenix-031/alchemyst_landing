import React from 'react'

import Image from 'next/image'

import shapeimage from '@/assets/shapetrustedsection.svg'

const Trusted = () => {
  return (
    <div className='w-[90%] bg-gradient-section1 py-10 px-4 mx-auto relative my-20'>
        <div className='absolute top-[-20%]'>
            <Image src={shapeimage} alt='shape image' className='w-full h-[20rem] right-0'/>
        </div>
        <div className='w-full flex justify-center items-center flex-col gap-6'>
            <div className='w-full text-center text-4xl font-bold font-poppins text-tertiary'>
                <p>Trusted BY Global Companies</p>
            </div>

            <div className='w-[80%] text-center font-normal text-xl font-poppins text-tertiary flex justify-center items-center py-6'>
                <p className='w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In possimus sapiente, qui dolores beatae cumque doloribus ex fugit ab tenetur voluptate </p>
            </div>
        </div>

        <div className='w-[70] flex justify-center items-center gap-20 py-6 px-4'>
            <div className='text-3xl text-tertiary font-bold font-poppins flex justify-center items-center flex-col gap-4'>
                <p>500K</p>
                <p className='font-normal text-secondary'>World Wide Cients</p>
            </div>
            <div className='text-3xl text-tertiary font-bold font-poppins flex justify-center items-center flex-col gap-4'>
                <p>1M+</p>
                <p className='font-normal text-secondary'>Downloads</p>
            </div>
            <div className='text-3xl text-tertiary font-bold font-poppins flex justify-center items-center flex-col gap-4'>
                <p>865</p>
                <p className='font-normal text-secondary'>Winning Awards</p>
            </div>
        </div>

    </div>
  )
}

export default Trusted