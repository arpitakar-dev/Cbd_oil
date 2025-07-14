import React, { useState } from 'react'
import { InnerBanner } from '../common-banner/InnerBanner'
import './faqs.css'
import { FaqItem } from './FaqItem'
import { useLocation } from 'react-router-dom'

export const Faqs = () => {
     const faqscontents = [{
          id: 1,
          question: "Can I cancel my order?",
          answer: "Yes, you may be able to cancel your order depending on its status. Please contact our customer support immediately with your order number. If the order has already been processed for shipping, it may not be possible to cancel."
     },
     {
          id: 2,
          question: "Do you offer free shipping?",
          answer: "We periodically offer free shipping promotions. Please check our website banner or promotion section for current offers and eligibility requirements."
     },
     {
          id: 3,
          question: "What is your return policy?",
          answer: "We accept returns within [Number] days of purchase for a full refund or exchange, provided the item is in its original condition with all packaging. Please refer to our dedicated Returns & Exchanges page for detailed instructions and any exceptions."
     },
     {
          id: 4,
          question: "What is the shelf life of this product?",
          answer: "The shelf life of this product is [X months/years or as indicated on the packaging]. For best results, store in a cool, dry place away from direct sunlight."
     },
     {
          id: 5,
          question: "How do I contact customer support?",
          answer: "You can contact our customer support team via: Email: [Your Support Email Address], Phone: <link to (Available [Days of Week], [Hours of Operation]), Live Chat: [Link to Live Chat, if applicable]."
     },
     {
          id: 6,
          question: "Do you offer free shipping?",
          answer: "We periodically offer free shipping promotions. Please check our website banner or promotion section for current offers and eligibility requirements."
     }
     ]

     const [openItemId, setOpenItemId] = useState(null)
     const toggleItem = (id) => {
          setOpenItemId(openItemId === id ? null : id);
     };
     const location = useLocation()
     const isFaqsPage = location.pathname ==='/faqs'
     

     return (
          
          <>
          {isFaqsPage && <InnerBanner heading="FAQs"></InnerBanner>}
               <section className='cmn_gap faqs_sec'>
                    <div className="container-xl">
                         <div className="row">
                              <div className="col-lg-5 col-md-7 mx-auto">
                                   <div className="common_heading">
                                        <span className="bulletines">FAQs</span>
                                        <h2>Some effective FAQs</h2>
                                        <h3>Here's a more detailed</h3>
                                   </div>
                              </div>
                              <div className="col-lg-7 col-md-10 mx-auto">
                                   {faqscontents.map((item) => (
                                        <FaqItem key={item.id} item={item}
                                             toggleItem={toggleItem}
                                             isOpen={openItemId === item.id} ></FaqItem>
                                   ))}
                              </div>
                         </div>
                    </div>
               </section>

          </>
     )
}
