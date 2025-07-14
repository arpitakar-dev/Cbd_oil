import { Link } from "react-router-dom"
import './about.css'
import leafImg from'../../assets/images/leaf-1.png'
import aboutImg from '../../assets/images/sec1-img.jpg'
import abticn from '../../assets/images/icon-about-1.png'
import prmDrprImg from '../../assets/images/sec2-img.jpg'
import DrprImg1 from '../../assets/images/premium-products-image-1.jpg'
import DrprImg2 from '../../assets/images/premium-products-image-2.jpg'
import DrprImg3 from '../../assets/images/premium-products-image-3.jpg'
import { Button } from "bootstrap"




export const About = ({handleScroll}) => {
     return (
          <>

               {/* About Us section */}
               <section className="cmn_gap cmn-bg-light position-relative">
                    <img src={leafImg} alt="leaf" className="about-leaf" />
                    <div className="container-xl">
                         <div className="row align-items-center">
                              <div className="col-lg-5 col-md-6">
                                   <div className="abt-img-box">
                                        <img src={aboutImg} alt="About-left" />
                                   </div>
                              </div>
                              <div className="col-lg-7 col-md-6 ps-lg-4">
                                   <div className="abt-txt-box common-txt">
                                        <div className="common_heading">
                                             <span className="bulletines">About us</span>
                                             <h2>Pure essence precise drops</h2>
                                             <h3>ultimate care always</h3>
                                             <p>
                                                  We believe that every drop matters. Our premium oil dropper
                                                  bottles are designed to deliver purity, precision, and care with
                                                  every use.
                                             </p>
                                        </div>
                                        <ul className="sec-list">
                                             <li>Precision in every drop designed for perfect application</li>
                                             <li>
                                                  Leak-Proof &amp; durable protecting your precious Oils with care
                                             </li>
                                        </ul>
                                        <div className="organic_div">
                                             <span className="icon-wrap">
                                                  <img src={abticn} alt="" width={20} />
                                             </span>
                                             <div className="txt-block">
                                                  <h4>100% Organic &amp; Pure</h4>
                                                  <p>
                                                       Helping to restore balance and promote overall wellness.
                                                       Supports the body’s natural systems to reduce stress and
                                                       promote relaxation.
                                                  </p>
                                             </div>
                                        </div>
                                        <button className="common_btn-green" onClick={handleScroll}>
                                             Shop Now
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               {/* Premium Dropper section */}
               <section className="cmn_gap">
                    <div className="container-xl">
                         <div className="row align-items-center">
                              <div className="col-lg-7 col-md-6 order-lg-1 order-md-1 order-2">
                                   <div className="abt-txt-box common-txt premium-txt-box">
                                        <div className="common_heading">
                                             <span className="bulletines">premium Dropper</span>
                                             <h2>Premium quality precise drops</h2>
                                             <h3>pure performance</h3>
                                             <p>
                                                  Our oil dropper bottles designed precision, ensuring controlled
                                                  application.
                                             </p>
                                        </div>
                                        <ul className="sec-list">
                                             <li>Easy and mess-free oil dispensing</li>
                                             <li>Prevents spills and waste.</li>
                                             <li>Durable and safe for essential oils.</li>
                                        </ul>
                                        <div className="dropper-row">
                                             <div className="dropper-item">
                                                  <img src={DrprImg1} alt="" />
                                                  <h4>Leak-Proof Seal </h4>
                                             </div>
                                             <div className="dropper-item">
                                                  <img src={DrprImg2} alt="" />
                                                  <h4>Untouched Drop</h4>
                                             </div>
                                             <div className="dropper-item">
                                                  <img src={DrprImg3} alt="" />
                                                  <h4>Durable-glass</h4>
                                             </div>
                                        </div>
                                        <button className="common_btn-green" onClick={handleScroll}>
                                             Shop Now
                                        </button>
                                   </div>
                              </div>
                              <div className="col-lg-5 col-md-6 order-lg-2 order-md-2 order-1">
                                   <div className="abt-img-box">
                                        <img src={prmDrprImg} alt="About-left" />
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </>

     )
}
