import React from 'react'

export const FaqItem = ({item, toggleItem, isOpen}) => {
     const {id,question, answer} = item
     return (
          <>
               <div className={`faq-item ${isOpen ? 'active' : ''}`}>
                    <div className="faq-question" onClick={()=>toggleItem(id)}>{question}</div>
                    <div className="faq-answer">{answer}</div>
               </div>
          </>
     )
}
