

import card1 from '@/src/assets/cards/card1.png'
import card2 from '@/src/assets/cards/card2.png'
import card3 from '@/src/assets/cards/card3.png'

// const Featurecustom = () => {
//   return (
//     <div className='w-[100%] flex justify-center items-center flex-col mx-auto py-10 px-2 bg-white'>

//         <div className="text-2xl tablet:text-3xl font-bold text-center text-tertiary my-4 pb-40 font-poppins">
//             <p>Alchemyst Are The First Generation Of <br /> Human-Like Digital Workers</p>
//         </div>

//         <main className="flex flex-row gap-y-32 gap-x-4 font-poppins w-full mx-auto justify-center items-center min-h-[38rem] desktop:flex-row desktop:flex-wrap">

//             <div className="max-w-sm flex justify-end items-end py-2 min-w-[30rem] desktop:min-w-[22rem]">
//                 <div className="px-5 py-10 border-purple-500 border-[2.5px] rounded-xl relative h-[22rem]">
//                 <Image src={card1} alt="first image" className="rounded-t-lg z-20 absolute top-[-45%] left-[50%] -translate-x-[50%] shadow-sm" />
//                     <h5 className="text-3xl font-bold tracking-tight text-tertiary">
//                         End-To-End Workflow Automation
//                     </h5>
//                     <p className="py-6 text-xl sm:text-2xl font-medium text-tertiary">
//                         Alchemyst don&apos;t just automate simple, repetitive tasks - they automate job functions from end to end.
//                     </p>
//                 </div>
//             </div>

//             <div className="max-w-sm flex justify-end items-end py-2 min-w-[30rem] desktop:min-w-[22rem]">

//                 <div className="px-5 pt-10 pb-10 border-purple-500 border-[2.5px] rounded-xl relative h-[22rem]">
//                     <Image src={card2} alt="second image" className="rounded-t-lg z-20 absolute left-[50%] -translate-x-[50%] top-[-45%] shadow-sm" />
//                     <h5 className="mb-2 text-3xl font-bold tracking-tight text-tertiary">
//                         Participating Members Of Your Team
//                     </h5>
//                     <p className="py-6 text-xl sm:text-2xl font-medium text-tertiary">
//                         Alchemyst aren’t a SaaS tool for your team to use, are additions to your team. As you interact with them via web/Slack, they get to know you.
//                     </p>
//                 </div>
//             </div>

//             <div className="max-w-sm flex justify-end items-end py-2 min-w-[30rem] desktop:min-w-[22rem]">
//                 <div className="px-5 pt-10 pb-10 border-purple-500 border-[2.5px] rounded-xl relative h-[22rem]">
//                 <Image src={card3} alt="third image" className="rounded-t-lg z-20 absolute top-[-45%] left-[50%] -translate-x-[50%] shadow-sm"/>
//                 <h5 className="mb-2 text-3xl font-bold tracking-tight text-tertiary">
//                     Get you Onboarded In Under 10 Minutes
//                 </h5>
//                 <p className="py-6 text-xl sm:text-2xl font-medium text-tertiary">You onboard your Alchemyst with a 10-minute back &amp; forth conversation, with no technical or domain-specific skills required.
//                 </p>
//                 </div>
//             </div>
//         </main>

//     </div>
//   )
// }

// export default Featurecustom

import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

// interface FeatureCardProps {
//     title: string;
//     description: string;
//     image: string;
//     }


// const FeatureCard = ({ title, description, image } : FeatureCardProps) => {
//   return (
//     <div className="max-w-sm flex justify-end items-end py-2 min-w-[30rem] desktop:min-w-[22rem]">
//       <div className="px-5 py-10 border-purple-500 border-[2.5px] rounded-xl relative h-[22rem]">
//         <Image src={image} alt={title} className="rounded-t-lg z-20 absolute top-[-45%] left-[50%] -translate-x-[50%] shadow-sm" />
//         <h5 className="text-3xl font-bold tracking-tight text-tertiary">{title}</h5>
//         <p className="py-6 text-xl sm:text-2xl font-medium text-tertiary">{description}</p>
//       </div>
//     </div>
//   );
// };


const FeatureCustom = () => {
  const features = [
    {
      title: 'End-To-End Workflow Automation',
      description: "Alchemyst don't just automate simple, repetitive tasks - they automate job functions from end to end.",
      image: card1,
    },
    {
      title: 'Participating Members Of Your Team',
      description: "Alchemyst aren't a SaaS tool for your team to use, are additions to your team. As you interact with them via web/Slack, they get to know you.",
      image: card2,
    },
    {
      title: 'Get you Onboarded In Under 10 Minutes',
      description: 'You onboard your Alchemyst with a 10-minute back & forth conversation, with no technical or domain-specific skills required.',
      image: card3,
    },
  ];

  return (
    <div className="w-full flex justify-center items-center flex-col mx-auto py-10 px-2 bg-white">
      <div className="text-2xl tablet:text-2xl font-bold text-center text-tertiary my-4 pb-20 font-poppins text-gray-800">
        <p>Alchemyst Are The First Generation Of <br /> Human-Like Digital Workers</p>
      </div>

      <main className="flex flex-row gap-y-32 gap-x-10 font-poppins w-full mx-auto justify-center items-center min-h-[38rem] desktop:flex-row desktop:flex-wrap">
        {features.map(({image,title,description}, index) => (
        //   <FeatureCard key={index} {...feature} />
            <div key={index} className="max-w-sm flex justify-end items-end py-2 min-w-[25rem] desktop:min-w-[22rem]">
                <div className="px-5 py-10 border-purple-500 border-[2.5px] rounded-xl relative h-[22rem]">
                    <Image src={image} alt={title} className="rounded-t-lg z-20 absolute top-[-45%] left-[50%] -translate-x-[50%] shadow-sm" />
                    <h5 className="text-3xl font-bold tracking-tight text-tertiary">{title}</h5>
                    <p className="py-6 text-xl sm:text-2xl font-medium text-tertiary">{description}</p>
                </div>
            </div>
        ))}
      </main>
    </div>
  );
};

export default FeatureCustom;
