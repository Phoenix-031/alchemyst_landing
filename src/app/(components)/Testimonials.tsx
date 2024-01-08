import Image from 'next/image'
import React from 'react'

import testimonialimage from '@/assets/testimonial/testimonial1.svg'

const testimonialsData = [
    {
        image: 'testimonialimage',
        name: 'John Doe',
        position: 'CEO, Company',
        testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        image: 'testimonialimage',
        name: 'John Doe',
        position: 'CEO, Company',
        testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        image: 'testimonialimage',
        name: 'John Doe',
        position: 'CEO, Company',
        testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
]

const Testimonials = () => {
  return (
    <section className='w-[90%] mx-auto py-4 px-2 my-6'>
        <div className='w-[80%] py-4 px-2 text-tertiary font-bold text-4xl mx-auto text-center font-poppins'>
            <p>Client Testimonials</p>
        </div>

        <div className='w-[80%] text-xl text-tertiary font-poppins text-center mx-auto py-4'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, qui <br/> Exercitationem, molestiae? Asperiores, soluta ut?</p>
        </div>

        <div className=' flex justify-center items-center overflow-hidden gap-4'>
            {
                testimonialsData.map((testimonial, index) => (
                    <TestimonialCard key={index} image={testimonial.image} name={testimonial.name} position={testimonial.position} testimonial={testimonial.testimonial} />
                ))
            }
        </div>

    </section>
  )
}

export default Testimonials

interface TestimonialCardPropsType {
    image: string;
    name: string;
    position: string;
    testimonial: string;
}


const TestimonialCard = (props : TestimonialCardPropsType) => {
    return (
        <div className='py-10'>

            <div className='flex justify-between items-center py-2 px-6'>
                <div className='flex justify-center items-basline px-4 py-2 text-xl text-tertiary flex-col'>
                    <span>{props.name}</span>
                    <span>{props.position}</span>
                </div>
                <div>
                    <Image src={testimonialimage} alt='testimonial image' width={50} height={50}/>
                </div>
            </div>

            <div className='text-xl font-poppins font-normal text-tertiary w-full py-2 px-8'>
                <p>{props.testimonial}</p>
            </div>
            
        </div>
    )
}