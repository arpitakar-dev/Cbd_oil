import React from 'react'
import { InnerBanner } from '../common-banner/InnerBanner'
import { About } from './About'
import { Faqs } from '../faqs/Faqs'
import { Testimonials } from '../testimonial/Testimonials'

export const AboutPage = () => {
  return (
    <>
     <InnerBanner heading="About"></InnerBanner>
     <About></About>
     <Faqs></Faqs>
     <Testimonials></Testimonials>
    </>
  )
}
