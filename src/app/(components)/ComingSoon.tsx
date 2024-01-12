// import React from 'react'

// import profile1 from '@/assets/profile/profile1.png';
// import profile2 from '@/assets/profile/profile2.png';
// import profile3 from '@/assets/profile/profile3.png';
// import Image from 'next/image';

// const ComingSoon = () => {
//   return (
//      <div className='w-[80%] flex justify-center items-center flex-col mx-auto py-10 px-2'>

//         <div className="text-5xl font-bold text-center text-tertiary py-4 font-poppins">
//             <p>Alchemyst Coming Soon</p>
//         </div>

//         <section className="flex flex-row gap-10 font-outfit">
//             <div className="max-w-sm bg-white border-none">
//                 <Image src={profile1} alt="profile 1" className="rounded-t-lg z-20 relative top-[68px] left-[80px] shadow-sm h-[10rem] w-[13rem]" />
//                 <div className="px-[50px] pt-[80px] pb-5 border-purple-800 border-[2px] rounded-xl">
//                     <h5 className="mb-2 text-3xl font-bold text-tertiary text-center">
//                         Ava, The Sales Rep
//                     </h5>
//                     <p className="mb-2 text-xl font-medium text-tertiary text-center">
//                         Supercharge Your Outbound Sales, At Scale
//                     </p>
//                     <ul className="mb-3 pl-8 pt-6 font-semibold text-tertiary justify-center list-disc">
//                         <li className="pb-2">
//                             Discovers leads with 250 million contacts &amp; 65 data points
//                         </li>
//                         <li className="pb-2">
//                             Writes &amp; sends bespoke email sequences to 1000s of prospects
//                         </li>
//                         <li className="pb-2">
//                             Replies to prospects’ questions
//                         </li>
//                         <li className="pb-2">
//                             Books meetings into SDRs’ calendars
//                         </li>
//                     </ul>
//                     <button className="text-lg font-poppins rounded-lg bg-floralwhite text-tertiary border-[1px] border-tertiary py-2 px-5 font-semibold">
//                         Hire Ava
//                     </button>
//                     </div>
//                 </div>

//                 <div className="max-w-sm bg-white border-none">
//                     <Image src={profile2} alt="profile 2" className="rounded-t-lg z-20 relative top-[68px] left-[90px] shadow-sm h-[10rem] w-[13rem]"/>
//                     <div className="px-[50px] pt-[80px] pb-5 border-purple-800 border-[2px] rounded-xl">
//                         <h5 className="mb-2 text-3xl font-bold text-tertiary text-center">
//                             Liam, The Marketer
//                         </h5>
//                         <p className="mb-2 text-xl font-medium text-tertiary text-center">
//                             Supercharge Your Growth Without Huge Overheads
//                         </p>
//                         <ul className="mb-3 pl-8 pt-6 font-semibold text-tertiary justify-center list-disc">
//                             <li className="pb-2">
//                                 Creates &amp; executes multi-channel marketing campaigns
//                             </li>
//                             <li className="pb-2">
//                                 Learns from your team &amp; builds a world model of your company
//                             </li>
//                             <li className="pb-2">
//                                 Uses advanced data analytics to optimize for ROI
//                             </li>
//                         </ul>
//                         <button className="text-lg font-poppins rounded-lg bg-floralwhite text-tertiary border-[1px] border-tertiary py-2 px-5 font-semibold">
//                             Hire Liam
//                         </button>
//                         </div>
//                     </div>

//                     <div className="max-w-sm bg-white border-none">
//                         <Image src={profile3} alt="profile 3" className="rounded-t-lg z-20 relative top-[68px] left-[90px] shadow-sm h-[10rem] w-[13rem]"/>
//                         <div className="px-[50px] pt-[80px] pb-5 border-purple-800 border-[2px] rounded-xl">
//                             <h5 className="mb-2 text-3xl font-bold text-tertiary text-center">
//                                 James, The CS Rep
//                             </h5>
//                             <p className="mb-2 text-xl font-medium text-tertiary text-center">
//                                 Support Your Customers With Unparaleled Product Knowledge
//                             </p>
//                             <ul className="mb-3 pl-8 pt-6 font-semibold text-tertiary justify-center list-disc">
//                                 <li className="pb-2">
//                                     Integrates with your existing CS stack
//                                 </li>
//                                 <li className="pb-2">
//                                     Analyzes all past CS cases to improve response reliability
//                                 </li>
//                                 <li className="pb-2">
//                                     Optimizes for positive sentiment responses
//                                 </li>
//                             </ul>
//                             <button className="text-lg font-poppins rounded-lg bg-floralwhite text-tertiary border-[1px] border-tertiary py-2 px-5 font-semibold">
//                                 Hire James
//                             </button>
//                         </div>
//                     </div>
//         </section>

//      </div>
//   )
// }

// export default ComingSoon


import React from 'react';
import Image from 'next/image';

import profile1 from '@/assets/profile/profile1.png';
import profile2 from '@/assets/profile/profile2.png';
import profile3 from '@/assets/profile/profile3.png';

const profiles = [
  {
    image: profile1,
    name: 'Ava, The Sales Rep',
    description: 'Supercharge Your Outbound Sales, At Scale',
    points: [
      'Discovers leads with 250 million contacts & 65 data points',
      'Writes & sends bespoke email sequences to 1000s of prospects',
      'Replies to prospects’ questions',
    ],
  },
  {
    image: profile2,
    name: 'Liam, The Marketer',
    description: 'Supercharge Your Growth Without Huge Overheads',
    points: [
      'Creates & executes multi-channel marketing campaigns',
      'Learns from your team & builds a world model of your company',
      'Uses advanced data analytics to optimize for ROI',
    ],
  },
  {
    image: profile3,
    name: 'James, The CS Rep',
    description: 'Support Your Customers With Unparalleled Product Knowledge',
    points: [
      'Integrates with your existing CS stack',
      'Analyzes all past CS cases to improve response reliability',
      'Optimizes for positive sentiment responses',
    ],
  },
];

const ComingSoon = () => {
  return (
    <div className="w-[100%] flex justify-center items-center flex-col mx-auto py-5 px-2">
      <div className="text-3xl tablet:text-4xl font-bold text-center text-tertiary py-4 font-poppins">
        <p>Alchemyst Coming Soon</p>
      </div>

      <section className="flex gap-4 font-poppins flex-col desktop:flex-wrap desktop:flex-row justify-center items-center">
        {profiles.map(({ image, name, description, points }, index) => 
        (
          <div key={index} className="max-w-sm bg-white flex justify-end items-center flex-col">
            <div className='w-full flex justify-center items-center relative top-16' >
                <Image src={image} alt={`profile ${index + 1}`} className="rounded-t-lg z-20 shadow-sm h-[10rem] w-[13rem]" />
            </div>

            <div className="px-[50px] pt-[80px] pb-5 border-purple-800 border-[2px] rounded-xl h-[35rem] mobile:w-[40rem] desktop:w-[20rem] lg:w-[22rem] lg:h-[40rem] xl:w-[24rem] desktop:h-max flex flex-col justify-around">
              <h5 className="mb-2 text-3xl font-bold text-tertiary text-center mobile:text-4xl">
                {name}
              </h5>
              <p className="mb-2 text-xl font-medium text-tertiary text-center">
                {description}
              </p>
              <ul className="mb-3 pl-8 pt-6 font-semibold text-tertiary justify-center list-disc mobile:text-xl">
                {points.map((point, index) => (
                  <li key={index} className="pb-2">
                    {point}
                  </li>
                ))}
              </ul>
              <button className="text-lg font-poppins rounded-lg bg-floralwhite text-tertiary border-[1px] border-tertiary py-2 px-8 font-semibold mobile:text-xl max-w-max self-center">
                {`Hire ${name.split(',')[0]}`}
              </button>
            </div>

          </div>
        ))}
      </section>
    </div>
  );
}

export default ComingSoon;