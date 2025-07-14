import React, { useContext, useEffect, useState } from 'react'
import './thank-you.css'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

import tick from '../../assets/images/tick.png'


export const ThankYou = () => {
  const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState({});

  const{clearCart} = useContext(CartContext)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("shippingInfo"));
    setShippingInfo(data || {});
  }, []);

  const gohome = () => {
    localStorage.removeItem("shippingInfo");
    clearCart()
    navigate("/");
  }


  return (
    <>
      <main>
        <div className="content">
          <div className="wrapper-1">
            <div className="wrapper-2">
              <img src={tick} alt={tick} className='tick-icon'/>
              <h1 className='ty-h1'>Thank <span>you!</span></h1>
              <p>{shippingInfo?.name} Your order was completed successfully</p>
              <h4>Order Id: {shippingInfo?.id}</h4>
              <button className="go-home" onClick={gohome}>
                Keep Shopping
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
