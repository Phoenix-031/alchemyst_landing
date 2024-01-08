import React from 'react'

import Navbar from './(components)/Navbar'
import Partners from './(components)/Partners'
import Services from './(components)/Services'
import About from './(components)/About'
import Information from './(components)/Information'
import Footer from './(components)/Footer'
import Features from './(components)/Features'
import ComingSoon from './(components)/ComingSoon'
import Join from './(components)/Join'
import Trusted from './(components)/Trusted'
import Integration from './(components)/Integration'
import Testimonials from './(components)/Testimonials'


const Landing = () => {
  return (
    <div className='w-full max-h-max bg-primary mx-auto'>
      <Navbar />
      <About />
      <Partners />
      <Features />
      <ComingSoon />
      <Services />
      <Information />
      <Trusted />
      <Integration />
      <Join />
      <Testimonials />
      <Footer/>
    </div>
  )
}

export default Landing