import React from 'react'
import { ProductList } from './ProductList'
import { InnerBanner } from '../common-banner/InnerBanner'

export const Shop = () => {
  return (
    <>
      <InnerBanner heading="All Products"></InnerBanner>

      <section className='cmn_gap'>
        <div className='container-xl'>
          <div className="row">
            <ProductList />
          </div>
        </div>
      </section>
    </>
  )
}
