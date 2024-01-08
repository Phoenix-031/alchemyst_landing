import React from 'react'

import Image from 'next/image'
import image1 from '@/assets/image1.svg'
import infoimage from '@/assets/infoimage.png'

const Information = () => {
  return (
    <div className='w-[100%] mx-auto flex justify-center items-center flex-col gap-10 py-6'>
        <div className='w-full flex justify-center items-center gap-4'>

            <div className=' flex-1'>
                <div className='w-[80%] h-[80%] mx-auto my-auto'>
                    <Image src={image1} alt='introductory image' width={100} className='w-full object-cover'/>
                </div>
            </div>

            <div className=' flex-1 max-h-max'>
                <div className='text-tertiary w-full flex justify-center items-center'>
                    <h2 className='text-3xl font-bold py-5 px-4'>They Use Our Feature-Rich <br />SaaS Platform</h2>
                </div>

                <div className=' pl-6 py-6'>
                    <p className='text-xl font-semibold text-tertiary'>We are building a feature-rich SaaS platform which <br/> Alchemyst operate within.</p>
                </div>

                <ol className='w-[80%] px-10 list-disc'>
                    <li className='text-xl font-semibold text-tertiary mb-4'>
                        <p>Either you, or your Alchemyst, can do anything within the platform</p>
                    </li>
                   <li className='text-xl font-semibold text-tertiary mb-4'>
                        <p>Either you, or your Alchemyst, can do anything within the platform</p>
                    </li>
                </ol>

                <div className='w-full py-4 px-4'>
                    <button className='font-semibold text-tertiary py-3 px-5 border-[1px] border-tertiary rounded-lg '>Meet Ava</button>
                </div>
            </div>

        </div>



        <div className='w-full flex justify-center items-center gap-4'>

            <div className=' flex-1 max-h-max'>
                <div className='text-tertiary w-full flex justify-center items-center'>
                    <h2 className='text-3xl font-bold py-5 px-4'>Alchemysts Self-Improve <br/> Every Single Day</h2>
                </div>

                <div className=' pl-6 py-6 flex justify-center items-center'>
                    <p className='text-xl font-semibold text-tertiary'>Chat with your Alchemyst via our web chat or Slack app.<br/> You can ask them to do tasks, change settings, do research, <br />or just seek some advice.</p>
                </div>

                {/* <ol className='w-[80%] px-10'>
                    <li className='text-xl font-semibold text-tertiary mb-4'>
                        <p>Either you, or your Alchemyst, can do anything within the platform</p>
                    </li>
                   <li className='text-xl font-semibold text-tertiary mb-4'>
                        <p>Either you, or your Alchemyst, can do anything within the platform</p>
                    </li>
                </ol> */}

                <div className='text-xl font-semibold text-tertiary mb-4 flex justify-center items-center'>
                    <p>They’ll even send you unprompted updates & suggestions.</p>
                </div>

                {/* <div className='w-full py-4 px-4'>
                    <button className='font-semibold text-tertiary py-3 px-5 border-[1px] border-tertiary rounded-lg'>Meet Ava</button>
                </div> */}
            </div>

            <div className=' flex-1'>
                <div className='w-[80%] h-[80%] mx-auto my-auto'>
                    <Image src={infoimage} alt='introductory image' className='w-full object-cover'/>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Information