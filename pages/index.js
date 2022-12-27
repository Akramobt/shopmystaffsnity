import React from 'react';

import { Product,FooterBanner,HeroBanner } from '../components';

function Home() {
  return (
    <>
      <HeroBanner/>
    <div className='products-heading'>
      <h2> Best Selling Products</h2>
      <p>Speakers of many variations</p>
    
    </div>
    <div className='products-container'>
    { ['Product1', 'Product2'].map((product)=> product)}
    </div>

    <FooterBanner/>
    </>
  )
}

export default Home
