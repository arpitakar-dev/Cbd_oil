import React from 'react'
import { ContactForm } from './ContactForm'
import { InnerBanner } from '../common-banner/InnerBanner'
import { ContactCard } from './ContactCard'
import contactbg1 from '../../assets/images/contactus_bg-1.jpg'
import contactbg2 from '../../assets/images/contactus_bg-2.jpg'
import contactbg3 from '../../assets/images/contactus_bg-3.jpg'




export const Contact = () => {
     const contactDetails = [
          {
               id: 1,
               heading: 'Call Us',
               contactdetails: '+1 386-688-3295',
               bg_image:contactbg1,
               icon: "bi bi-telephone"
          },
          {
               id: 2,
               heading: 'Mail us',
               contactdetails: 'cannavedic@gmail.com',
               bg_image: contactbg2,
               icon: "bi bi-envelope"
          },
          {
               id: 3,
               heading: 'Address',
               contactdetails: 'EP Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091',
               bg_image: contactbg3,
               icon: "bi bi-geo-alt"
          }]

     return (
          <>
               <InnerBanner heading="Contact"></InnerBanner>
               <section className="cmn_gap">
                    <div className="container-xl">
                         <div className="row justify-content-center">
                              {contactDetails.map((item) => (
                                   <div className="col-lg-4 col-md-6 col-sm-6 col-12 " key={item.id}>
                                        <ContactCard contactDetails = {item}/>
                                   </div>
                              ))}
                         </div>

                         <div className="row">
                              <div className="col-lg-7 mx-auto">
                                   <ContactForm></ContactForm>
                              </div>
                         </div>
                    </div>
               </section>
               
          </>
     )
}
