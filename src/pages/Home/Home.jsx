import React from 'react';
import products from '../../data/products';
import ProductCard from '../../components/ProductCard/ProductCard';

const Home = () => {
  return (
    <div className="mx-auto my-10 grid max-w-[1134px] grid-cols-3 gap-x-[19px] gap-y-[30px]">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;