import React from 'react'

import Image from 'next/image'

import socialicon1 from '@/assets/socials/icon1.svg';
import socialicon2 from '@/assets/socials/icon2.svg';
import socialicon3 from '@/assets/socials/icon3.svg';
import socialicon4 from '@/assets/socials/icon4.svg';
import socialicon5 from '@/assets/socials/icon5.svg';
import socialicon6 from '@/assets/socials/icon6.svg';

const socialIconData = [
    {
        image: socialicon1,
        title: 'Facebook',
        link: 'https://facebook.com'
    },
    {
        image: socialicon2,
        title: 'Twitter',
        link: 'https://twitter.com'
    },
    {
        image: socialicon3,
        title: 'Instagram',
        link: 'https://instagram.com'
    },
    {
        image: socialicon4,
        title: 'LinkedIn',
        link: 'https://linkedin.com'
    },
    {
        image: socialicon5,
        title: 'Youtube',
        link: 'https://youtube.com'
    },
    {
        image: socialicon6,
        title: 'Github',
        link: 'https://github.com'
    },
]

const Integration = () => {
  return (
    <div className='w-[80%] py-6 mx-auto'>

        <div className='w-full py-6 px-4  font-poppins text-4xl text-tertiary font-bold text-center'>
            <p>Remotely Maintain Your Data,<br /> From Anywhere, Anytime.</p>
        </div>

        <div className='text-xl font-poppins font-semibold text-center text-tertiary'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium amet at distinctio repellat, est quod.</p>
        </div>

        <div className=' flex justify-center items-center w-[80%] mx-auto h-[15rem]'>
            {
                socialIconData.map((social, index) => (
                    <div key={index} className={`flex flex-1 items-center flex-col gap-2 py-4 px-2  h-[12rem] ${index%2 == 0 ? 'justify-end' : 'justify-start'}`}>
                        <div className='w-16 h-16'>
                            <Image src={social.image} alt='social icon' className='w-full h-full' />
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Integration