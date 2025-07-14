import React from 'react'
import style from './contactcard.module.css'

export const ContactCard = ({ contactDetails }) => {

  const {
    heading,
    contactdetails,
    bg_image,
    icon } = contactDetails
  return (
    <>
      <div className={`${style.contact_card} ${style.bg_settings}`} style={{
        background: `url(${bg_image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center left',
        backgroundSize: 'cover'
      }}>
        <div className={`${style.contact_details}`}>
          <span className={`${style.icon}`}>
            <i className={icon}></i>
          </span>
          <h4>{heading}</h4>
          <p>{contactdetails}</p>
        </div>
      </div>
    </>
  )
}
