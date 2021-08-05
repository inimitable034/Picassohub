import React from 'react';
import Product from './Product';

export default function Shop(props) {
  const { products, onAdd } = props;
  return (
    <div>
      <div className="head-prod">
     <h2>Products</h2>
     </div>
    <main className="products">
      <div className="items">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
    </div>
  );
}