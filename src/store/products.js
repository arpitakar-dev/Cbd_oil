import product1 from '../assets/images/product-1.jpg'
import product2 from '../assets/images/product-2.jpg'
import product3 from '../assets/images/product-3.jpg'
import product4 from '../assets/images/product-4.jpg'
import product5 from '../assets/images/product-5.jpg'
import product6 from '../assets/images/product-6.jpg'
import product7 from '../assets/images/product-7.jpg'
import product8 from '../assets/images/product-8.jpg'


import product1S2 from '../assets/images/product1-slider2.jpg'
import product1S3 from '../assets/images/product1-slider3.jpg'
import product1S4 from '../assets/images/product1-slider4.jpg'
import product1S5 from '../assets/images/product1-slider5.jpg'
import product1S6 from '../assets/images/product1-slider6.jpg'

import product2S2 from '../assets/images/product2-slider2.jpg'
import product2S3 from '../assets/images/product2-slider3.jpg'
import product2S4 from '../assets/images/product2-slider4.jpg'
import product2S5 from '../assets/images/product2-slider5.jpg'
import product2S6 from '../assets/images/product2-slider6.jpg'


import product3S2 from '../assets/images/product3-slider2.jpg'
import product3S3 from '../assets/images/product3-slider3.jpg'
import product3S4 from '../assets/images/product3-slider4.jpg'
import product3S5 from '../assets/images/product3-slider5.jpg'
import product3S6 from '../assets/images/product3-slider6.jpg'


import product4S2 from '../assets/images/product4-slider2.jpg'
import product4S3 from '../assets/images/product4-slider3.jpg'
import product4S4 from '../assets/images/product4-slider4.jpg'
import product4S5 from '../assets/images/product4-slider5.jpg'
import product4S6 from '../assets/images/product4-slider6.jpg'

import product5S2 from '../assets/images/product5-slider2.jpg'
import product5S3 from '../assets/images/product5-slider3.jpg'
import product5S4 from '../assets/images/product5-slider4.jpg'

import product6S2 from '../assets/images/product6-slider2.jpg'
import product6S3 from '../assets/images/product6-slider3.jpg'
import product6S4 from '../assets/images/product6-slider4.jpg'

import product7S2 from '../assets/images/product7-slider2.jpg'
import product7S3 from '../assets/images/product7-slider3.jpg'
import product7S4 from '../assets/images/product7-slider4.jpg'
import product7S5 from '../assets/images/product7-slider5.jpg'

import product8S2 from '../assets/images/product8-slider2.jpg'
import product8S3 from '../assets/images/product8-slider3.jpg'
import product8S4 from '../assets/images/product8-slider4.jpg'




const product1slider = [product1, product1S2, product1S3, product1S4, product1S5, product1S6]

const product2slider = [product2, product2S2, product2S3, product2S4, product2S5, product2S6]

const product3slider = [product3, product3S2, product3S3, product3S4, product3S5, product3S6]

const product4slider = [product4, product4S2, product4S3, product4S4, product4S5, product4S6]

const product5slider = [product5, product5S2, product5S3, product5S4]

const product6slider = [product6, product6S2, product6S3, product6S4]

const product7slider = [product7, product7S2, product7S3, product7S4, product7S5]

const product8slider = [product8, product8S2, product8S3, product8S4]

const products = [
  {
    id: '01',
    item_image: product1,
    slider_images: product1slider,
    item_name: 'CannaStrong 1000mg',
    categoryname: 'THC+CBD Oil',
    size: '10ml',
    retun_period: 14,
    delivary_date: '10 June 2025',
    prices: { current_price: 500, original_price: 600 },
    rating: { stars: 4.5, number_of_reviews: 554 },
  },
  {
    id: '02',
    item_image: product2,
    slider_images: product2slider,
    item_name: 'Pure CBD Oil Natural 500mg',
    categoryname: 'CBD Oil',
    size: '10ml',
    retun_period: 14,
    delivary_date: '10 June 2025',
    prices: { current_price: 500, original_price: 600 },
    rating: { stars: 4.7, number_of_reviews: 410 },

  },
  {
    id: '03',
    item_image: product3,
    slider_images: product3slider,
    item_name: 'Pet CBD Oil 500mg',
    categoryname: 'Pet Oil',
    size: '10ml',
    retun_period: 7,
    delivary_date: '10 June 2025',
    prices: { current_price: 3000, original_price: 4000 },
    rating: { stars: 4.2, number_of_reviews: 230 },
  },
  {
    id: '04',
    item_image: product4,
    slider_images: product4slider,
    item_name: 'CannaBalance 1000mg',
    categoryname: 'THC+CBD oil',
    size: '10ml',
    retun_period: 14,
    delivary_date: '10 June 2025',
    prices: { current_price: 4500, original_price: 5000 },
    rating: { stars: 4.8, number_of_reviews: 630 },
  },
  {
    id: '05',
    item_image: product5,
    slider_images: product5slider,
    item_name: 'Vedic Relife Oil',
    categoryname: 'Pain Relief Oil',
    size: '100ml',
    retun_period: 14,
    delivary_date: '10 June 2025',
    prices: { current_price: 1000, original_price: 2000 },
    rating: { stars: 4.8, number_of_reviews: 120 },
  },
  {
    id: '06',
    item_image: product6,
    slider_images: product6slider,
    item_name: 'Canna Relax Candy 300mg',
    categoryname: 'CBD Candy',
    size: '5 Candies',
    retun_period: 14,
    delivary_date: '10 June 2025',
    prices: { current_price: 800, original_price: 1000 },
    rating: { stars: 4.3, number_of_reviews: 310 },
  },

  {
    id: '07',
    item_image: product7,
    slider_images: product7slider,
    item_name: 'Acidity Relife',
    categoryname: 'Acidity Medicine',
    size: '250gm',
    retun_period: 14,
    delivary_date: '10 June 2025',
    prices: { current_price: 5000, original_price: 10000 },
    rating: { stars: 4.3, number_of_reviews: 310 },
    quantity: 1
  },
  {
    id: '08',
    item_image: product8,
    slider_images: product8slider,
    item_name: 'Triphala Extract Capsules',
    categoryname: 'Detoxify Capsules',
    size: '60 Capsules',
    retun_period: 14,
    delivary_date: '10 June 2025',
    prices: { current_price: 800, original_price: 800 },
    rating: { stars: 4.3, number_of_reviews: 370 },
  }
]

export default products