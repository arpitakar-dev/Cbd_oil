import { About } from "../about/About"
import './home.css'
import bannerBg from '../../assets/images/banner-1.jpg'
import { Link } from "react-router-dom"
import { ProductList } from "../Products/ProductList"
import { Testimonials } from "../testimonial/Testimonials"
import {useHandleScroller} from '../../hooks/useHandelScroller'


export const Home = () => {

    const {handleScroll, targetSec} = useHandleScroller()

     return (
          <>
               <section className="banner_section" style={{
                    background: `url(${bannerBg})`,
                    backgroundRepeat: 'no-repeat', 
                    backgroundPosition: 'center left',
                    backgroundSize: 'cover'
               }}>
                    <div className="container-xl">
                         <div className="row">
                              <div className="col-xl-6 col-lg-8">
                                   <div className="banner_txt">
                                        <h6 className="pre_hdng">
                                             Discover Nature's Healing Power in Every Drop
                                        </h6>
                                        <h1>
                                             Elevate Your Wellness Journey with
                                             <span>CBD Harmony</span>
                                        </h1>
                                        <p>
                                             Experience the soothing embrace of premium CBD products
                                             <span>a curated selection of wellness essentials.</span>
                                        </p>
                                        <Link to="javacript:void(0)" className="common_btn" onClick={handleScroll}>
                                             Shop Now <i className="bi bi-arrow-right" />
                                        </Link>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               <About handleScroll={handleScroll}></About>

               {/* {Product section} */}

               <section className="cmn_gap cmn-bg-light" ref={targetSec}>
                    <div className="container-xl">
                         <div className="row align-items-center">
                              <div className="col-lg-7 order-lg-1 order-1">
                                   <div className="common_heading">
                                        <span className="bulletines">Our Products</span>
                                        <h2>Premium drops products</h2>
                                        <h3>precis performance</h3>
                                   </div>
                              </div>
                              <div className="col-lg-5 text-lg-end text-center order-lg-1 order-3">
                                   <Link to="/shop" className="common_btn-green">
                                        View All</Link>
                              </div>
                              <div className="col-lg-12 my-3 order-lg-3 order-2">
                                   <div className="row">
                                        <ProductList limit={4}></ProductList>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               <Testimonials></Testimonials>



          </>
     )
}
