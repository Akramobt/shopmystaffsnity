import React from 'react';

import { Product,FooterBanner,HeroBanner } from '../components';
import { client } from '../lib/client';


function Home({products,bannerData}) {
  return (
    <>
      <HeroBanner heroBanner = { bannerData.length && bannerData[0]}/>
      
    <div className='products-heading'>
      <h2> Best Selling Products</h2>
      <p>Speakers of many variations</p>
    
    </div>
    <div className='products-container'>
    { products?.map((product)=> product.name)}
    </div>

    <FooterBanner/>
    </>
  )
}
export const getServerSideProps = async ()=> {
  const query='*[_type=="product"]';
  const products = await client.fetch(query);

  const bannerquery='*[_type=="banner"]';
  const bannerData = await client.fetch(bannerquery);
  return{
    props:{products,bannerData}
  }
}
export default Home
