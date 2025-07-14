import React, { useState } from 'react'
import './contactform.css'
import tick from '../../assets/images/tick.png'
import style from './contactcard.module.css'

export const ContactForm = () => {
     const [contacterrors, setContactErrors] = useState({});
     const [openPopup, setOpenPopup] = useState(false)
     const handlecontctSubmit = (e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const data = Object.fromEntries(formData.entries());

          let newErrors = {};

          if (!data.name.trim()) newErrors.name = "Name is required";
          if (!data.email.trim()) {
               newErrors.email = "Email Address is required";
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
               newErrors.email = "Enter a valid Email address";
          }
          if (!data.contactTextarea.trim()) newErrors.contactTextarea = "Write Message";

          setContactErrors(newErrors);

          if (Object.keys(newErrors).length === 0) {
               e.target.reset();
               setOpenPopup(true)
          }

     }



     return (
          <>
               <h2 className="mb-3 text-center">Get in touch with us</h2>
               <form className='contact_form' onSubmit={handlecontctSubmit}>
                    <div className="row">
                         <div className="col-md-6 input_wrapper">
                              <input type="text" name="name" placeholder='Full name' />
                              {contacterrors.name && <p className="error">{contacterrors.name}</p>}
                         </div>
                         <div className="col-md-6 input_wrapper">
                              <input type="email" name="email" placeholder='Email' />
                              {contacterrors.email && <p className="error">{contacterrors.email}</p>}
                         </div>
                         <div className="col-md-12 input_wrapper">
                              <textarea name='contactTextarea' placeholder='Write here'></textarea>
                              {contacterrors.contactTextarea && <p className="error">{contacterrors.contactTextarea}</p>}
                         </div>
                         <div className="col-md-12">
                              <button type="submit" className="common_btn btn-place-order mt-3">Send</button>
                         </div>
                    </div>
               </form>
               <div className={`contact-overlay ${openPopup ? 'opened' : ''}`}>
                    <div className="form_submission_popUp">
                         <img src={tick} alt={tick} />
                         <h2>Thank You!</h2>
                         <p>Feedback submitted successfully.</p>
                         <button onClick={()=>setOpenPopup(false)}>Ok</button>
                    </div>
               </div>

          </>
     )
}
