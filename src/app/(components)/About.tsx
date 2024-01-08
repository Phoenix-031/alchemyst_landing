import React from 'react'

import Image from 'next/image'

import aboutimage from '@/assets/aboutimage.png'


const About = () => {

  return (
    <div className='flex justify-center items-center py-6 px-4 h-full w-[90%] mx-auto'>
        <div className='flex-1 py-8 flex justify-end items-center flex-col'>
          <div className='text-6xl font-semibold font-urbanist px-5 flex justify-center items-center pl-20 flex-col'>
            <div>
              <p className='text-secondary'>We Create <span className='font-bold text-tertiary'>DIGITAL</span> </p>
            </div>
            <div className='w-full flex justify-center items-center'>
              <span className='text-tertiary'>Workers</span>
            </div>
            <div>
              <p className='text-secondary'>Called <span className='font-bold text-tertiary'>ARTISANS</span></p>
            </div>
          </div>

          <div className='w-full py-6 px-2 flex justify-center items-center'>
            <input type="text" placeholder='Email' className='bg-primary border-0 border-secondary w-2/3 rounded-xl flex justify-start items-center text-xl font-poppins text-black py-3 px-3 focus:border-0'/>
          </div>

          <div className='text-inherit text-2xl font-poppins pl-20 px-2 overflow-hidden flex justify-start items-center py-8 text-secondary'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, modi?</p>
          </div>
          <div className='flex justify-center items-center gap-6 py-4 px-3'>
            <p className='py-3 px-6 rounded-xl font-poppins text-lg text-tertiary border-[1px] border-tertiary font-semibold'>Meet All Artisans</p>
            <p className='py-3 px-6 rounded-xl font-poppins text-lg text-tertiary border-[1px] border-tertiary font-semibold'>Hire Artisans</p>
          </div>

          
        </div>
        <div className='flex-1 h-[40rem] flex justify-start items-center flex-col py-6 gap-3 '>
           <div className='flex justify-center items-center flex-col font-poppins text-4xl font-semibold py-4 w-full gap-4 flex-1 text-tertiary '>
                <p className='-translate-x-6 '><span className='text-5xl'>Meet</span> the first</p>
                <p className='translate-x-6'><span className='text-5xl'>Artisan !!</span></p>
           </div>

           <div className='w-full flex justify-center items-center'>
                <div className=' w-1/2 flex justify-center items-center'>
                  <Image src={aboutimage} alt='introductory image' className='w-full object-cover border-2 border-white my-3'/>
                </div>
           </div>
        </div>
    </div>
  )
}

export default About