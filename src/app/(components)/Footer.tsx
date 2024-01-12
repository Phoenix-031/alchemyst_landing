import React from 'react'

const Footer = () => {
  return (
    <div className="w-[100%] bg-primary bg-cover py-5 mx-auto mobile:w-[80%] tablet:w-[90%]">

        <div className='grid grid-cols-2 grid-rows-3 px-6 mobile:grid-cols-3 mobile:grid-rows-2 mobile:px-3 lg:grid-cols-4 lg:grid-rows-1'>

            <div className='text-tertiary w-full px-5 col-span-2 col-start-1 mobile:col-span-1 mobile:px-2 py-4'>
                {/* <h1 className="text-2xl mobile:text-3xl font-bold py-3">Alchemyst</h1> */}
                <h3 className="text-xl mobile:text-2xl font-bold">Contact Us</h3>
                <h3 className="py-2">Call : +123 400 123</h3>
                <h3 className="py-2 mobile:text-xl">Praesent nulla massa, hendrerit <br /> vestibulum gravida in, feugiat auctor felis.</h3>
                <h3 className="py-2 mobile:text-xl">Email: example@mail.com</h3>
            </div>

                <div className='flex justify-start mobile:justify-start flex-col items-baseline px-5 mobile:px-5 col-start-1 col-span-1 mobile:col-start-2 mobile:row-start-1 py-4 row-start-2 mobile:items-center'>
                    <h3 className="text-xl font-bold text-tertiary">Explore</h3>
                    <ul className="py-2 text-tertiary mobile:text-lg">
                        <li className="py-2">Home</li>
                        <li className="py-2">About</li>
                        <li className="py-2">Course</li>
                        <li className="py-2">Blog</li>
                        <li className="py-2">Contact</li>
                    </ul>
                </div>

                <div className='flex justify-center flex-col  items-center col-start-2 col-span-1 mobile:col-start-3 mobile:row-start-1 row-start-2 py-4'>
                <h3 className="text-xl font-bold text-tertiary">Category</h3>
                    <ul className="py-2 text-tertiary mobile:text-lg">
                        <li className="py-2">Design</li>
                        <li className="py-2">Development</li>
                        <li className="py-2">Marketing</li>
                        <li className="py-2">Business</li><li className="py-2">Lifestyle</li>
                        <li className="py-2">Photography</li><li className="py-2">Music</li>
                    </ul>
                </div>

            <div className='flex-1 flex justify-center flex-col  items-center col-span-2 row-start-3 mobile:row-start-2 mobile:col-span-3 w-full lg:row-start-1 lg:col-span-1 lg:col-start-4'>
                <h3 className="text-2xl tablet:text-4xl font-bold text-tertiary">Subscribe</h3>
                <h3 className="py-2 text-tertiary mobile:text-lg">Praesent nulla massa, hendrerit <br/> vestibulum gravida in, feugiat auctor felis.</h3>
                <form className="py-4">
                    <input className="bg-[#F2F3F4] border-[1px] border-secondary p-4 w-full rounded" placeholder="Email here" />
                        <button className="max-[780px]:w-full my-4 px-5 py-3 rounded-md bg-[#20B486] text-white font-medium">Subscribe Now
                   </button>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Footer