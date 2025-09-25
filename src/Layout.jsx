import React from 'react'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from './components/footer/Footer'
import ScrollToTop from './components/ScrollToTop'

function Layout() {
  return (
    <>

      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout