import React, { useContext, useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import { CartContext } from '../../contexts/CartContext'
import './product-details.css'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export const Productdetails = () => {
  const { addToCart } = useContext(CartContext)

  const [productDetails, setProductDetails] = useState(null)

  useEffect(() => {
    const storeProductDetails = localStorage.getItem('productDetailsObj')
    if (storeProductDetails) {
      setProductDetails(JSON.parse(storeProductDetails))
    }
  }, [])

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    if (productDetails) {
      setNav1(slider1.current);
      setNav2(slider2.current);
    }
  }, [productDetails]);

  if (!productDetails) {
    return <p>Loading product details...</p>
  }

  return (
    <>
      <main>
        <section className="cmn_gap">
          <div className="container-xl">
            <div className="row product_details-container">
              <div className="col-lg-7 leftPart">
                {/* main Slider */}
                <Slider asNavFor={nav2}
                  ref={slider1}
                  arrows={true}
                  dots={false}
                  infinite={false}
                  speed={500}
                  slidesToShow={1}
                  slidesToScroll={1}>
                  {productDetails.slider_images.map((img, index) => (
                    <div className="img_box" key={index}>
                      <img src={img} alt={`Slide ${index}`} />
                    </div>
                  ))}
                </Slider>

                {/* Thumbnail slider */}

                <Slider
                  asNavFor={nav1}
                  ref={slider2}
                  slidesToShow={Math.min(productDetails.slider_images.length, 6)}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  infinite={false}
                  arrows={false}
                  vertical={true}
                  verticalSwiping={true}
                  responsive={[
                   
                    {
                      breakpoint: 767, // For mobile devices
                      settings: {
                        vertical: false,
                        verticalSwiping: false,
                        slidesToShow : 4
                      },
                    },
                  ]}
                  className="thumb-slider"
                >
                  {productDetails.slider_images.map((img, index) => (
                    <div className="img_box" key={index}>
                      <img src={img} alt={`Slide ${index}`} />
                    </div>
                  ))}
                </Slider>


                {/* <div className="img_box">
                  <img src={productDetails.item_image} alt="" />
                </div> */}
              </div>
              <div className="col-lg-5 rightpart">
                <h3 className="Prod_name">{productDetails.item_name} | {productDetails.categoryname}</h3>
                <p className="prod_subtitle mt-2">Excellent quality product</p>
                <h3 className="sub-hd">SIZE: {productDetails.size}</h3>
                <span className="ratingstar"><i className="fa-solid fa-star" /> {productDetails.rating.stars} Rating</span>
                <div className="prod_det">
                  <p className="prod_price detail_page-price d-inline-block me-2">₹ {productDetails.prices.current_price}</p>
                  {/* <span className="org_price">₹ {productDetails.prices.original_price}</span> */}
                  <button className="common_btn add-to-cart" onClick={() => addToCart(productDetails)}>Add to cart
                  </button>
                  <Link to="/cart" className="gotocartbtn">Go to cart</Link>
                  <hr />
                  <h3 className="sub-hd">Product Details</h3>
                  <ul className="info_list mb-3">
                    <li>100% Original Products</li>
                    <li>Pay on delivery might be available</li>
                    <li>Easy 14 days returns and exchanges</li>
                  </ul>
                  <p className="mb-2"><strong>Benefits:</strong></p>
                  <p>Stress Reduction<br />
                    Enhanced Relaxation<br />
                    Impoved Sleep Quality<br />
                    Boosts overall wellbeing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
