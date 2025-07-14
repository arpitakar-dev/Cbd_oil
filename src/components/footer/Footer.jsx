import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './footer.css'
import footerImage from '../../assets/images/logo-footer.png'

export const Footer = () => {
     return (
          <>
               <footer>
                    <div className="container-xl">
                         <div className="row">
                              <div className="col-lg-3 col-md-12 text-lg-start text-md-center mb-md-5">
                                   <Link to="/">
                                        <img
                                             src={footerImage}
                                             alt="Logo"
                                             className="footer-logo mb-lg-4 mb-2"
                                        />
                                   </Link>
                                   <p>
                                        Cannavedic is a wellness-focused company offering premium CBD oil
                                        products, promoting natural healing, stress relief, better sleep, and
                                        overall well-being through plant-based solutions.
                                   </p>
                              </div>
                              <div className="col-lg-2 offset-lg-1 col-md-4">
                                   <h4 className="ft_list_hd">Quick Links</h4>
                                   <ul className="ft_link_list">
                                        <li>
                                             <NavLink to="/">Home</NavLink>
                                        </li>
                                        <li>
                                             <NavLink to="/aboutpage">About Us</NavLink>
                                        </li>
                                        <li>
                                             <NavLink to="/shop">All Products</NavLink>
                                        </li>
                                        <li>
                                             <NavLink href="/contact">Contact Us</NavLink>
                                        </li>
                                   </ul>
                              </div>
                              <div className="col-lg-3 col-md-4">
                                   <h4 className="ft_list_hd">Other Link</h4>
                                   <ul className="ft_link_list">
                                        <li>
                                             <NavLink to="/faqs">FAQs</NavLink>
                                        </li>
                                        <li>
                                             <NavLink to="/">Shipping Policy</NavLink>
                                        </li>
                                        <li>
                                             <NavLink to="/">Terms &amp; Conditions</NavLink>
                                        </li>
                                        <li>
                                             <NavLink to="/">Privacy Policy</NavLink>
                                        </li>
                                   </ul>
                              </div>
                              <div className="col-lg-3 col-md-4">
                                   <ul className="ft_cont_list mb-2">
                                        <li>
                                             <i className="bi bi-geo-alt" /> 8819 Ohio St. South Gate, CA 90280
                                        </li>
                                        <li>
                                             <i className="bi bi-envelope" />
                                             <a href="mailto:cannavedic@gmail.com">cannavedic@gmail.com</a>
                                        </li>
                                        <li>
                                             <i className="bi bi-telephone" />
                                             <a href="tel:+1 386-688-3295">+1 386-688-3295</a>
                                        </li>
                                   </ul>
                                   <ul className="ft-sc-icon-list mt-4">
                                        <li>
                                             <a href="javascript:void(0)">
                                                  <i className="fa-brands fa-facebook-f" />
                                             </a>
                                        </li>
                                        <li>
                                             <a href="javascript:void(0)">
                                                  <i className="fa-brands fa-instagram" />
                                             </a>
                                        </li>
                                        <li>
                                             <a href="javascript:void(0)">
                                                  <i className="fa-brands fa-youtube" />
                                             </a>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                         <hr />
                         <div className="row copyright_sec text-center">
                              <p>cannavedic © 2025, All Rights Reserved.</p>
                         </div>
                    </div>
               </footer>

          </>
     )
}
