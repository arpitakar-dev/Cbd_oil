import React from 'react'
import { Product } from './Product'
import products from '../../store/products'
import './product.css'

export const ProductList = ({ limit }) => {
  const limitProductList = limit ? products.slice(0, limit) : products

  return (
    <>

      {limitProductList.map((item) => (
        <div className='col-lg-3 col-md-6 col-6 mt-3' key={item.id}>
          <Product item={item} />
        </div>
      ))}
    </>
  )
}
