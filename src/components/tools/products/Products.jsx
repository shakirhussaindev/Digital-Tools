import React, { use } from 'react';
import Card from './Card';

const Products = ({ fetchProduct, cardArr, setCardArr}) => {
  const products = use(fetchProduct)
  return (
  <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
    {
      products.map(product => {
        return (
          <Card
            product={product}
            key={product.id}
            cardArr={cardArr}
            setCardArr={setCardArr}
          />
        );
      })
    }
  </div>
)};

export default Products;