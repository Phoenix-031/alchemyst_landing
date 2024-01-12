import React from 'react'

import Image from 'next/image'

import aboutimage from '@/assets/aboutimage.png'

import AboutSpecial from './(components)/AboutSpecial'


const About = () => {

  
  return (
    <div className='flex flex-col-reverse justify-center items-center py-6 px-4 h-full w-full desktop:flex-row desktop:w-[80%] mx-auto'>
        <div className='flex-1 py-8 flex justify-end items-center flex-col'>
          <div className='text-5xl font-semibold font-urbanist px-5 flex justify-center items-center flex-col'>
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

          <div className='w-full py-4 px-2 flex justify-center items-center'>
            <input type="text" placeholder='Email' className=' bg-primary border-[1px] border-secondary w-full rounded-lg flex justify-start items-center text-lg font-poppins text-black py-2 px-2 focus:border-0'/>
          </div>

          <div className='text-xl font-poppins w-full overflow-hidden break-words py-4 text-secondary text-left sm:text-2xl'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, modi?</p>
          </div>
          <div className='flex justify-center items-center gap-2 py-4 px-3'>
            <p className='py-2 px-3 rounded-lg font-poppins text-sm text-tertiary border-[1px] border-tertiary font-semibold sm:text-xl'>Meet All Artisans</p>
            <p className='py-2 px-3 rounded-lg font-poppins text-sm text-tertiary border-[1px] border-tertiary font-semibold sm:text-xl'>Hire Artisans</p>
          </div>

          
        </div>
        <div className='flex-1 h-[40rem] flex justify-start items-center flex-col py-6 gap-3 '>
           <div className='flex justify-center items-center flex-col font-poppins text-4xl font-semibold py-4 w-full gap-4 flex-1 text-tertiary '>
                <p className='-translate-x-6 text-2xl'><span className='text-4xl'>Meet</span> the first</p>
                <p className='translate-x-6'><span className='text-4xl'>Artisan !!</span></p>
           </div>

           <div className='w-full flex justify-center items-center'>
                  {/* <AboutSpecial /> */}

                <div className=' w-1/2 flex justify-center items-center'>
                  {/* <Image src={aboutimage} alt='introductory image' className='w-full object-cover border-2 border-white my-3'/> */}
                  {/* <AboutSpecial /> */}
                </div>
           </div>
        </div>
    </div>
  )
}

export default About