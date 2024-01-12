import React from 'react'

import { cardDara } from '@/data/cardData'

import Image from 'next/image'

const Services = () => {
  return (
    <div className=' max-h-max w-full py-4 pt-14 px-6 flex justify-start items-center flex-col overflow-hidden mx-auto mobile:px-2 lg:w-[90%]'>
        <div className='w-[full flex justify-center items-center'>
            <div className='flex justify-center items-center flex-col text-tertiary'>
                <p className='font-poppins font-bold text-tertiary text-3xl tablet:text-4xl py-2'>Alchemyst AI Services</p>
                <p className='font-Enriqueta font-normal text-xl tablet:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, esse.</p>
            </div>
        </div>

        <div className='grid grid-cols-1 grid-rows-auto w-full max-h-max my-4 mx-4 gap-4 rounded-lg py-4  mobile:grid-cols-2 mobile:gap-2 desktop:grid-cols-3 desktop:grid-rows-2'>

            {cardDara.map((card, index) => (
                <div key={index} className='flex justify-center items-center py-2 px-1'>
                    <CardComponent 
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    />
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Services

interface CardPropsType {
    image: string;
    title: string;
    description: string;
}

const CardComponent = (cardProps :CardPropsType ) => {
    return (
        <div className='max-w-[25rem] tablet:max-w-[28rem] desktop:max-w-[25rem] min-h-max flex justify-center items-center flex-col gap-3 rounded-xl hover:shadow-cardshadow py-6 hover:transition-shadow bg-gray-100'>
            <div className='w-full flex items-baseline justify-start py-3 px-3'>
                <Image src={cardProps.image} alt='icon' className='w-14 h-14 bg-action rounded-lg' />
            </div>

            <div className='font-semibold text-2xl tablet:text-2xl font-poppins text-tertiary text-left w-full px-4'>
                <p>{cardProps.title}</p>
            </div>

            <div className='font-normal text-xl font-poppins text-secondary text-left w-full px-4 py-4'>
                <p>{cardProps.description}</p>
            </div>
        </div>
    )
}