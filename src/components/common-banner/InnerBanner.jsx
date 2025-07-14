import React from 'react'
import './innerbanner.css'

export const InnerBanner = ({heading}) => {
  return (
    <>
     <section className="inner-banner">
          <div className="container-xl text-center">
               <h1>{heading}</h1>
          </div>
     </section>
    </>
  )
}
