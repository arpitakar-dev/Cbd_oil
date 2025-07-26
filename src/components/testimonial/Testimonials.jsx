import React from 'react'
import Slider from "react-slick";
import { TestimonialItem } from './TestimonialItem'
import './testimonial.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import testimonialImg1 from '../../assets/images/testimonial-1.jpg'
import testimonialImg2 from '../../assets/images/testimonial-2.jpg'
import testimonialImg3 from '../../assets/images/testimonial-3.png'
import testimonialImg4 from '../../assets/images/testimonial-4.png'
import testimonialImg5 from '../../assets/images/testimonial-5.jpg'
import testimonialImg6 from '../../assets/images/testimonial-6.jpg'

export const Testimonials = () => {
     const testimonials = [{
          id: 1,
          name: 'Lily J',
          image: testimonialImg1,
          text: "Great experience! I ordered Cannavedic oil for Sleep and Pain Relief, and the quality was top-notch. Delivery was quick."
     },
     {
          id: 2,
          name: 'Srij H',
          image: testimonialImg2,
          text: "There Products are good, and they gibt you a really good support and advice.. Truly satisfied."
     },
     {
          id: 3,
          name: 'Liciania Y',
          image: testimonialImg3,
          text: "Great for joint pain and stress relief. Natural and effective alternative to traditional medicine."
     },
     {
          id: 4,
          name: 'Devid N',
          image: testimonialImg4,
          text: "CBD oil helped reduce my anxiety and improved sleep quality without any side effects. Highly recommend!"
     },
     {
          id: 5,
          name: 'Marco P',
          image: testimonialImg5,
          text: "Noticeable relief from muscle soreness after workouts. CBD oil works better than expected and feels completely natural."
     },
     {
          id: 6,
          name: 'Taltro J',
          image: testimonialImg6,
          text: "CBD oil reduced my anxiety and improved focus without causing drowsiness or a high feeling."
     }]


     var settings = {
          dots: false,
          infinite: true,
          arrow: true,
          autoplay: false,
          autoplaySpeed: 1500,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
               {
                    breakpoint: 576,
                    settings: {
                         slidesToShow: 1,
                         slidesToScroll: 2
                    }
               },
               {
                    breakpoint: 480,
                    settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1
                    }
               }
               // You can unslick at a given breakpoint now by adding:
               // settings: "unslick"
               // instead of a settings object
          ]
     };
     return (
          <>
               <section className="cmn_gap">
                    <div className="container-xl">
                         <div className="common_heading">
                              <span className="bulletines">Testimonials</span>
                              <h2>Real reviews trusted quality</h2>
                              <h3>happy customers</h3>
                         </div>
                         <div className="testimonial-slider-Wrapper">
                              <Slider {...settings}>
                                   {testimonials.map((item) => (
                                        <div className="" key={item.id}>
                                             <TestimonialItem
                                                  name={item.name}
                                                  image={item.image}
                                                  text={item.text}
                                             />
                                        </div>

                                   ))}
                              </Slider>

                         </div>
                    </div>
               </section>

          </>
     )
}
