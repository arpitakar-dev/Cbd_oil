import React from 'react'
import { InnerBanner } from '../common-banner/InnerBanner'
import { About } from './About'
import { Faqs } from '../faqs/Faqs'
import { Testimonials } from '../testimonial/Testimonials'
import { useHandleScroller } from '../../hooks/useHandelScroller'

export const AboutPage = ({}) => {
  const {handleScroll} = useHandleScroller()
  return (
    <>
     <InnerBanner heading="About"></InnerBanner>
     <About handleScroll={handleScroll}></About>
     <Faqs></Faqs>
     <Testimonials></Testimonials>
    </>
  )
}
