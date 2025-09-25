import React from "react";
import products from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";

const Products = () => {
  const limitedProducts = products.slice(0, 6);

  return (
    <div className="max-w-[1134px] mx-auto my-5 px-5">
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {limitedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;