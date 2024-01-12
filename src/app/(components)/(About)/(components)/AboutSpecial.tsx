import React from 'react'

import Image from 'next/image'
import aboutimage from '@/assets/aboutimage.png'

const AboutSpecial = () => {
  return (
    <div className='w-full h-[30rem] flex justify-center items-center'>
      <div className='border-2 border-green-500 rounded-full w-[8rem] h-[8rem] flex justify-center items-center relative'>
        <div className='absolute h-[12rem] w-[12rem] border-2 border-black rounded-full'></div>


        <div className='absolute h-[16rem] w-[16rem] border-2 border-black rounded-full'>
          <div className='absolute h-[20rem] w-[20rem] rounded-full translate-x-2'>
            <Image src={aboutimage} alt='introductory image' className='w-[3rem] h-[3rem] object-cover rounded-full my-3'/>
          </div>

          <div className='absolute h-[20rem] w-[20rem] rounded-full translate-x-[70%] translate-y-[20%]'>
            <Image src={aboutimage} alt='introductory image' className='w-[3rem] h-[3rem] object-cover rounded-full my-3'/>
          </div>

          <div className='absolute h-[20rem] w-[20rem]rounded-full translate-x-[60%] translate-y-[60%]'>
            <Image src={aboutimage} alt='introductory image' className='w-[3rem] h-[3rem] object-cover rounded-full my-3'/>
          </div>
        </div>

        <div className='absolute h-[20rem] w-[20rem] border-2 border-black rounded-full'>

          <div className='absolute h-[20rem] w-[20rem] rounded-full translate-x-[50%] -translate-y-[10%]'>
            <Image src={aboutimage} alt='introductory image' className='w-[3rem] h-[3rem] object-cover rounded-full my-3'/>
          </div>
          
          <div className='absolute h-[20rem] w-[20rem] rounded-full translate-x-[50%] translate-y-[88%]'>
            <Image src={aboutimage} alt='introductory image' className='w-[3rem] h-[3rem] object-cover rounded-full my-3'/>
          </div>
          
        </div>


        <div className='absolute h-[24rem] w-[24rem] border-2 border-black rounded-full rotate-[100deg]'>

          <div className='absolute h-[20rem] w-[20rem] rounded-full translate-x-[50%] -translate-y-[10%]'>
            <Image src={aboutimage} alt='introductory image' className='w-[3rem] h-[3rem] object-cover rounded-full my-3 rotate-[-100deg]'/>
          </div>
          
          <div className='absolute h-[20rem] w-[20rem] rounded-full translate-x-[80%] translate-y-[100%]'>
            <Image src={aboutimage} alt='introductory image' className='w-[3rem] h-[3rem] object-cover rounded-full my-3 rotate-[-100deg]'/>
          </div>

          <div className='absolute h-[20rem] w-[20rem] rounded-full translate-x-[0%] translate-y-[80%]'>
            <Image src={aboutimage} alt='introductory image' className='w-[3rem] h-[3rem] object-cover rounded-full my-3 rotate-[-100deg]'/>
          </div>


        </div>


        <div className='absolute h-[28rem] w-[28rem] border-2 border-black rounded-full'></div>

        <Image src={aboutimage} alt='introductory image' className='w-full h-full object-cover rounded-full my-3'/>
      </div>
    </div>
  )
}

export default AboutSpecial