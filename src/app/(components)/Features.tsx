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

        <main className="flex flex-row gap-10 font-poppins">
            <div className="max-w-sm bg-white border-none">
                <Image src={card1} alt="first image" className="rounded-t-lg z-20 relative top-[68px] left-[41px] shadow-sm" />
                <div className="px-5 pt-[80px] pb-5 border-purple-500 border-[2.5px] rounded-xl">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-tertiary">
                        End-To-End Workflow Automation
                    </h5>
                    <p className="mb-3 font-medium text-tertiary">
                        Alchemyst don&apos;t just automate simple, repetitive tasks - they automate job functions from end to end.
                    </p>
                </div>
            </div>
            <div className="max-w-sm bg-white border-none">
                <Image src={card2} alt="second image" className="rounded-t-lg z-20 relative top-[68px] left-[53px] shadow-sm" />
                    <div className="px-5 pt-[80px] pb-5 border-purple-500 border-[2.5px] rounded-xl">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-tertiary">
                            Participating Members Of Your Team
                        </h5>
                    <p className="mb-3 font-medium text-tertiary">
                        Alchemyst aren’t a SaaS tool for your team to use, are additions to your team. As you interact with them via web/Slack, they get to know you.
                    </p>
                </div>
            </div>
            <div className="max-w-sm bg-white border-none">
                <Image src={card3} alt="third image" className="rounded-t-lg z-20 relative top-[68px] left-[52px] shadow-sm"/>
                    <div className="px-5 pt-[80px] pb-5 border-purple-500 border-[2.5px] rounded-xl">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-tertiary">
                    Get you Onboarded In Under 10 Minutes
                </h5>
                <p className="mb-3 font-medium text-tertiary">You onboard your Alchemyst with a 10-minute back &amp; forth conversation, with no technical or domain-specific skills required.
                </p>
                </div>
            </div>
        </main>

    </div>
  )
}

export default Features