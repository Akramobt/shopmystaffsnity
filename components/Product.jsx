import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const Product = ({product : {image , name, slug,price}}) => {
  
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});


let DZD = new Intl.NumberFormat('fr-DZ', {
  style: 'currency',
  currency: 'DZD',
});

  return (
    
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img src={urlFor(image && image[0] ) }
          width={250}
          height={250}
          className='product-image' />
          <p className='product-name'>{name}</p>
          <p className='product-price'>{DZD.format(price)} </p>

        </div>
      </Link>
    </div>
  )
}

export default Product