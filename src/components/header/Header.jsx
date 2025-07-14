import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.css'
import logo from '../../assets/images/logo.png'
import { CartContext } from '../../contexts/CartContext'


function Header() {
  const { cartCount } = useContext(CartContext)
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isSticky, setSticky] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setSticky(true)
      }
      else {
        setSticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.addEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    }
    else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen])

  return (
    <>
      <div className="py-2 text-white top_bar text-center">
        Shop Now &amp; Get a Chance to Win a <u>FREE PRODUCT</u>
      </div>
      <header className={`site_header_wrapper ${isSticky ? 'fixed' : ''}`}>
        <div className="container-xl">
          <div className="site_header">
            <div className="site_logo">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="mobile_menu_btn" onClick={toggleMenu}>
              <span className="mobile_menu_icon" />
              <span className="mobile_menu_icon" />
              <span className="mobile_menu_icon" />
            </div>
            <div className={`nav_bar_collapse ${isMenuOpen ? 'active' : ''}`}>
              <ul className="main_nav_list">
                <li className="main_nav_list-item">
                  <NavLink to="/shop" className="menu_link">
                    Shop
                  </NavLink>
                </li>
                <li className="main_nav_list-item">
                  <NavLink to="/aboutpage" className="menu_link">
                    About
                  </NavLink>
                </li>
                <li className="main_nav_list-item">
                  <NavLink to="/faqs" className="menu_link">
                    FAQs
                  </NavLink>
                </li>
                <li className="main_nav_list-item">
                  <NavLink to="/contact" className="menu_link">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="header_btn">
              <ul className="nav_icons_list">
                <li>
                  <Link to="/cart">
                    <i className="bi bi-cart" />
                  </Link>
                  {cartCount > 0 && <span className="cartcount">{cartCount}</span>}

                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className={`bg_overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>


    </>
  )
}

export default Header