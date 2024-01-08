import React from 'react'

import card1 from '@/assets/cards/card1.png'
import card2 from '@/assets/cards/card2.png'
import card3 from '@/assets/cards/card3.png'
import Image from 'next/image'

const Features = () => {
  return (
    <div className='w-[100%] flex justify-center items-center flex-col mx-auto py-10 px-2'>

        <div className="text-4xl font-bold text-center text-tertiary py-4 font-poppins">
            <p>Alchemyst Are The First Generation Of <br /> Human-Like Digital Workers</p>
        </div>

        <main className="flex flex-row gap-10 font-poppins gap-20 w-[90%] mx-auto justify-center items-stretch min-h-[38rem]">
            <div className="max-w-sm border-none flex justify-end items-end py-2">
                <div className="px-5 py-10 border-purple-500 border-[2.5px] rounded-xl relative">
                <Image src={card1} alt="first image" className="rounded-t-lg z-20 absolute top-[-50%] shadow-sm" />
                    <h5 className="text-3xl font-bold tracking-tight text-tertiary">
                        End-To-End Workflow Automation
                    </h5>
                    <p className="py-6 text-2xl font-medium text-tertiary">
                        Alchemyst don&apos;t just automate simple, repetitive tasks - they automate job functions from end to end.
                    </p>
                </div>
            </div>
            <div className="max-w-sm flex justify-end items-end py-2 border-none">

                <div className="px-5 pt-10 pb-10 border-purple-500 border-[2.5px] rounded-xl relative">
                    <Image src={card2} alt="second image" className="rounded-t-lg z-20 absolute top-[-40%] shadow-sm" />
                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-tertiary">
                        Participating Members Of Your Team
                    </h5>
                    <p className="py-6 text-2xl font-medium text-tertiary">
                        Alchemyst aren’t a SaaS tool for your team to use, are additions to your team. As you interact with them via web/Slack, they get to know you.
                    </p>
                </div>
            </div>
            <div className="max-w-sm flex justify-end items-end py-2 border-none">
                <div className="px-5 pt-10 pb-10 border-purple-500 border-[2.5px] rounded-xl relative">
                <Image src={card3} alt="third image" className="rounded-t-lg z-20 absolute top-[-40%] shadow-sm"/>
                <h5 className="mb-2 text-3xl font-bold tracking-tight text-tertiary">
                    Get you Onboarded In Under 10 Minutes
                </h5>
                <p className="py-6 text-2xl font-medium text-tertiary">You onboard your Alchemyst with a 10-minute back &amp; forth conversation, with no technical or domain-specific skills required.
                </p>
                </div>
            </div>
        </main>

    </div>
  )
}

export default Features