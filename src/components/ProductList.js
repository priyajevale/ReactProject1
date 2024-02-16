import React from 'react';

const ProductList = (props) => {
  const { products, deleteProduct, calculateTotalValue } = props;

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {`${product.name} - ${product.price}`}
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>Total Value Worth of the Product: ${calculateTotalValue()}</p>
    </div>
  );
};

export default ProductList;