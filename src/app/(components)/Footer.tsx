import React from 'react'

const Footer = () => {
  return (
    <div className="w-[80%] bg-primary bg-cover py-24 mx-auto">

        <div className='flex justify-center items-center py-4 px-6'>

            <div className='text-tertiary'>
                <h1 className="text-2xl font-bold mt-10">Alchemyst</h1>
                <h3 className="text-2xl font-bold mt-10">Contact Us</h3>
                <h3 className="py-2">Call : +123 400 123</h3>
                <h3 className="py-2">Praesent nulla massa, hendrerit <br /> vestibulum gravida in, feugiat auctor felis.</h3>
                <h3 className="py-2">Email: example@mail.com</h3>
                
            </div>

            <div className='flex-1 flex justify-center flex-col items-center'>
                <h3 className="text-2xl font-bold text-tertiary">Explore</h3>
                <ul className="py-6 text-tertiary">
                    <li className="py-2">Home</li>
                    <li className="py-2">About</li>
                    <li className="py-2">Course</li>
                    <li className="py-2">Blog</li>
                    <li className="py-2">Contact</li>
                </ul>
            </div>

            <div className='flex-1 flex justify-center flex-col  items-center'>
            <h3 className="text-2xl font-bold text-tertiary">Category</h3>
                <ul className="py-6 text-tertiary">
                    <li className="py-2">Design</li>
                    <li className="py-2">Development</li>
                    <li className="py-2">Marketing</li>
                    <li className="py-2">Business</li><li className="py-2">Lifestyle</li>
                    <li className="py-2">Photography</li><li className="py-2">Music</li>
                </ul>
            </div>

            <div className='flex-1 flex justify-center flex-col  items-center'>
                <h3 className="text-2xl font-bold text-tertiary">Subscribe</h3>
                <h3 className="py-2 text-tertiary">Praesent nulla massa, hendrerit <br/> vestibulum gravida in, feugiat auctor felis.</h3>
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