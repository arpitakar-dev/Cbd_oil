import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import products from '../../store/products'



export const Product = ({ item }) => {

     const { addToCart } = useContext(CartContext)

     const { item_name, item_image, prices, id, size} = item

     const setobjProductDetails = (itemID) => {
          const productDetails = products.find(prodItem => prodItem.id === itemID)
          localStorage.setItem('productDetailsObj', JSON.stringify(productDetails))
          console.log(productDetails)
     }

     return (
          <>
               <div className="product-item">
                    <Link to="/productdetails" className="product__item-img" onClick ={()=>setobjProductDetails(id)}>
                         <img src={item_image} alt="Product image" className="pro_img" />
                    </Link>
                    <div className="product__item-details">
                         <Link to="product-details.html" className="prod_name">
                              {item_name}
                         </Link>

                         <div className="prod_det">
                              <h5 className='prod_wight'>QTY : {size}</h5>
                              <p className="prod_price">₹{prices.current_price}</p>
                         </div>
                         <button className="addtocart_btn" onClick={() => addToCart(item)}>Add to cart</button>
                    </div>
               </div>

          </>
     )
}
