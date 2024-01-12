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
    <div className='w-[100%] py-2 mx-auto my-5 desktop:w-[80%]'>

        <div className='w-full py-6 px-4  font-poppins text-3xl text-tertiary font-bold text-center'>
            <p>Remotely Maintain Your Data,<br /> From Anywhere, Anytime.</p>
        </div>

        <div className='text-lg font-poppins font-semibold text-center text-tertiary mobile:w-[90%] mx-auto'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium amet at distinctio repellat, est quod.</p>
        </div>

        <div className=' flex justify-center items-center w-[100%] mx-auto h-[10rem]'>
            {
                socialIconData.map((social, index) => (
                    <div key={index} className={`flex flex-1 items-center flex-col gap-1 py-4  h-[10rem] ${index%2 == 0 ? 'justify-end' : 'justify-start'}`}>
                        <div className='w-12 h-12'>
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