import React from 'react'
import starImg from '../../assets/images/rate.svg'

export const TestimonialItem = ({image, name, text}) => {
     return (
          <>
               <div className="testimonial_item">
                    <div className="testimonial_item-img">
                         <img src={image} alt="profile" className='profile'/>
                    </div>
                    <div className="testimonial_item-txt mt-3">
                         <img src={starImg} alt="rate star" className="rate"/>
                              <h5>{name} <i className="bi bi-check-circle-fill"></i></h5>
                              <p>{text}</p>
                    </div>
               </div>
          </>
     )
}
