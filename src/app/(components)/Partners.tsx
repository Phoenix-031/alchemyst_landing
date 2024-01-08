"use client"

import React, { useEffect, useLayoutEffect } from 'react'
import Image from 'next/image'

import gsap from 'gsap'

import mandiri from '@/assets/partners/mandiri.svg'
import nike from '@/assets/partners/nike.svg'
import amazon from '@/assets/partners/amazon.svg'
import amd from '@/assets/partners/amd.svg'
import dropcam from '@/assets/partners/dropcam.svg'
import logitech from '@/assets/partners/logitech.svg'

const Partners = () => {

  const partnersRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
  const partenerContent = Array.from(partnersRef.current?.children || [])

  partenerContent.forEach(item => {
    const duplicatedItem = item.cloneNode(true)
    const duplicatedElement = duplicatedItem as HTMLElement;
    duplicatedElement.setAttribute('aria-hidden', 'true');
    partnersRef.current?.appendChild(duplicatedElement)
  })
  })
  
  return (
    <div className='w-[90%] mx-auto py-10 px-4 flex justify-center items-center [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] overflow-hidden bg-inherit'>
        <div 
        ref={partnersRef}
        className='flex justify-center items-center gap-20 animate-infinite-scroll'>

          {/* svg image will be dispalyed here */}
          <Image src={mandiri} alt='partners' className='py-2 px-4 w-60' />
          <Image src={nike} alt='partners' className='py-2 px-4 w-60' />
          <Image src={amazon} alt='partners' className='py-2 px-4 w-60' />
          <Image src={amd} alt='partners' className='py-2 px-4 w-60' />
          <Image src={dropcam} alt='partners' className='py-2 px-4 w-60' /> 
          <Image src={logitech} alt='partners' className='py-2 px-4 w-60' />          

        </div>
    </div>
  )
}

export default Partners