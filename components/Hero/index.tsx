"use client";
import Image from "next/image";
import { useState } from "react";
import AboutSpecial from "../About/(components)/AboutSpecial";

import aboutimg from  '@/src/assets/aboutimage.png'
import heroimg from '@/src/assets/bgimg1.png'

import localFont from 'next/font/local'

// const myFont = localFont({src :'public/fonts/Lastica.ttf',variable: '--font-lastica' })

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {/* <Image src={aboutimg} alt="Hero" /> */}
      <section className={`overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46 relative `}>
        {/* <div className=" absolute top-0 left-0 w-full h-full -z-20">
          <Image src={heroimg} alt="Hero" />
        </div> */}
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0  ">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                🔥 Solid - A Complete SaaS Web Template
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Free Next.js Template for {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  SaaS
                </span>
              </h1>
              <p>
                Solid Pro - Packed with all the key integrations you need for
                swift SaaS startup launch, including - Auth, Database, Sanity
                Blog, Essential Components, Pages and More. Built-winth -
                Next.js 13, React 18 and TypeScript.
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Get Started
                    </button>
                  </div>
                </form>

                <p className="mt-5 text-black dark:text-white">
                  Try for free no credit card required.
                </p>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <div className="overflow-hidden">
                  <Image src={aboutimg} alt="Hero" className="w-[150vw] h-[120%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
