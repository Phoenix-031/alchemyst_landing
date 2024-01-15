/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useLayoutEffect } from 'react'
import { useRef } from 'react';

import Image from 'next/image'
import aboutimage from '@/src/assets/aboutimage.png'

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const AboutSpecial = () => {

    const layer1 = useRef(null);
    const layer2 = useRef(null);
    const layer3 = useRef(null);
    const imageone = useRef(null);

//   const layer1images = Array.from(layer1.current?.children || []).flatMap(
//     (item) => Array.from(item.querySelectorAll('img'))
//   );

//     useLayoutEffect(() => {
//         console.log(layer1.current?.children);

//           const layer1images = Array.from(layer1.current?.children || []).flatMap(
//     (item) => Array.from(item.querySelectorAll('img'))
//   );

//         const tl = gsap.timeline()

//         tl.to(layer1images, {
//             scale : 2,
//             duration : 1,
//             ease : 'power2.inOut',
//             repeat : -1,
//             yoyo : true,
//         })

        
//     })
        
    useGSAP(() => {

  const layer1images = Array.from(layer1.current?.children || []).flatMap(
    (item) => Array.from(item.querySelectorAll('img'))
  );
  const layer2images = Array.from(layer2.current?.children || []).flatMap(
    (item) => Array.from(item.querySelectorAll('img'))
    );

  const layer3images = Array.from(layer3.current?.children || []).flatMap(
    (item) => Array.from(item.querySelectorAll('img'))
    );

        
        const tl = gsap.timeline({
            repeat : -1,
            yoyo : true,
        });

        tl.to(layer1images, {
            scale : 1.5,
            duration : 1,
            ease : 'power2.inOut',
        })
        .to(layer1images, {
            scale : 1,
            duration : 1,
            ease : 'power2.inOut',
        })
        .to(layer2images, {
            scale : 1.5,
            duration : 1,
            ease : 'power2.inOut',
        })
        .to(layer2images, {
            scale : 1,
            duration : 1,
            ease : 'power2.inOut',
        })
        .to(layer3images, {
            scale : 1.5,
            duration : 1,
            ease : 'power2.inOut',
        })
        .to(layer3images, {
            scale : 1,
            duration : 1,
            ease : 'power2.inOut',
        })
    
    })
    
    
  return (
    <div className='w-full h-[30rem] flex justify-center items-center'>
      <div className='border-2 border-gray-950 rounded-full w-[8rem] h-[8rem] flex justify-center items-center relative'>
        <div className='absolute h-[12rem] w-[12rem] border-2 border-[rgba(24,28,49,0.8)] rounded-full'></div>

        <div ref={layer1} className='absolute h-[16rem] w-[16rem] border-2 border-[rgba(24,28,49,0.7)] rounded-full'>
          <div className='absolute h-[20rem] w-[20rem] rounded-full translate-x-2'>
            <img ref={imageone} src={aboutimage.src} alt='introductory image' className='w-[3rem] h-[3rem] object-cover rounded-full my-3'/>
          </div>

          <div className='absolute h-[20rem] w-[20rem] rounded-full translate-x-[70%] translate-y-[20%]'>
            <img src={aboutimage.src} alt='introductory image' className='w-[3rem] h-[3rem] object-cover rounded-full my-3'/>
          </div>

          <div className='absolute h-[20rem] w-[20rem]rounded-full translate-x-[60%] translate-y-[60%]'>
            <img src={aboutimage.src} alt='introductory image' className='w-[3rem] h-[3rem] object-cover rounded-full my-3 '/>
          </div>
        </div>

        <div ref={layer2} className='absolute h-[20rem] w-[20rem] border-2 border-[rgba(24,28,49,0.5)] rounded-full'>

          <div className='absolute h-[20rem] w-[20rem] rounded-full translate-x-[50%] -translate-y-[10%]'>
            <Image src={aboutimage} alt='introductory image' className='w-[3rem] h-[3rem] object-cover rounded-full my-3'/>
          </div>
          
          <div className='absolute h-[20rem] w-[20rem] rounded-full translate-x-[50%] translate-y-[88%]'>
            <Image src={aboutimage} alt='introductory image' className='w-[3rem] h-[3rem] object-cover rounded-full my-3'/>
          </div>
          
        </div>


        <div ref={layer3} className='absolute h-[24rem] w-[24rem] border-2 border-[rgba(24,28,49,0.3)] rounded-full rotate-[100deg]'>

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


        <div className='absolute h-[28rem] w-[28rem] border-2 border-[rgba(24,28,49,0.1)] rounded-full'></div>

        <Image src={aboutimage} alt='introductory image' className='w-full h-full object-cover rounded-full my-3'/>
      </div>
    </div>
  )
}

export default AboutSpecial