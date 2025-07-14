
import { useContext } from 'react'
import './checkout.css'
import { CartContext } from '../../contexts/CartContext'
import { Link } from 'react-router-dom'
import { ShippingForm } from './ShippingForm'


export const Checkout = () => {
     const {
          cartCount,
          cartTotal,
          handlefee,
          grandTotal } = useContext(CartContext)
     return (
          <>
               <main>
                    <div className="checkout_wrapper cmn_gap">
                         <div className="shipping_details">
                              <h2 className="mb-3">Shipping Address</h2>
                              <ShippingForm></ShippingForm>
                         </div>

                         <div className="checkout-summary">
                              <div className="bag-details-container">
                                   <div className="price-header">PRICE DETAILS {`${cartCount} (${cartCount > 1 ? 'Items' : 'Item'}) `} </div>
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
                         </div>

                    </div>
               </main>
          </>
     )
}
