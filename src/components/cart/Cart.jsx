import React, { useContext } from 'react'
import './cart.css'
import { Link } from 'react-router-dom'
import { CartItem } from './CartItem'
import { CartContext } from '../../contexts/CartContext'



export const Cart = () => {
     const { 
          cartItems, 
          cartCount,
          cartTotal,  
          handlefee,
          grandTotal } = useContext(CartContext);

     return (
          <>
          <main>
               <div className="bag-page cmn_gap">
                    <div className="bag-items-container">
                         {cartItems.length === 0 ? (<div className="bag-item-container text-center justify-content-center">
                              <p className="fs-3">Add item to cart</p>
                         </div>) :
                         (cartItems.map((item) => (
                              <CartItem
                              key={item.id}
                              item={item}
                              >
                              </CartItem>
                         )
                         ))}
                    </div>
                    <div className="bag-summary">
                         <div className="bag-details-container">
                              <div className="price-header">PRICE DETAILS {`${cartCount} (${cartCount >1? 'Items': 'Item'}) `} </div>
                              <div className="price-item">
                                   <span className="price-item-tag">Total MRP</span>
                                   <span className="price-item-value">$ {cartTotal}</span>
                              </div>
                              {/*<div className="price-item">
                                   <span className="price-item-tag">Discount on MRP</span>
                                   <span className="price-item-value priceDetail-base-discount">
                                        -₹ 325
                                   </span>
                              </div>*/}
                              <div className="price-item">
                                   <span className="price-item-tag">Handle Fee</span>
                                   <span className="price-item-value">$ {handlefee}</span>
                              </div>
                              <div className="price-footer">
                                   <span className="price-item-tag">Total Amount</span>
                                   <span className="price-item-value">$ {grandTotal}</span>
                              </div>
                         </div>
                         <Link to={`${cartTotal > 0 ? '/checkout' : '/shop'}`} className={`common_btn btn-place-order ${cartTotal > 0 ? '' : 'disable'}`}>
                             {`${cartTotal > 0 ? 'PLACE ORDER' : 'ADD ITMES'}`}
                         </Link>
                    </div>
               </div>
          </main>
          </>
     )
}
