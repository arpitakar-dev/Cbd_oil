import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import PlainLayout from './PlainLayout.jsx'
// import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import { ProductProvider } from './contexts/CartContext.jsx';
import { Home } from './components/home/Home.jsx';
import { Cart } from './components/cart/Cart.jsx';
import { Shop } from './components/Products/Shop.jsx';
import {Productdetails} from './components/Products/Productdetails.jsx'
import { Checkout } from './components/checkout/Checkout.jsx';
import { ThankYou } from './components/thank-you/ThankYou.jsx';
import { Faqs } from './components/faqs/Faqs.jsx'
import { AboutPage } from './components/about/AboutPage.jsx'
import { Contact } from './components/contact/Contact.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}></Route>
      <Route path='cart' element={<Cart />}></Route>
      <Route path='shop' element={<Shop />}></Route>
      <Route path='aboutpage' element={<AboutPage/>}></Route>
      <Route path='faqs' element={<Faqs />}></Route>
      <Route path='contact' element={<Contact />}></Route>
      <Route path='checkout' element={<Checkout />}></Route>
      <Route path='productdetails' element={<Productdetails />}></Route>
    </Route>

    <Route element={<PlainLayout/>}>
      <Route path='thank-you' element={<ThankYou />}></Route>
    </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  </StrictMode>
)
