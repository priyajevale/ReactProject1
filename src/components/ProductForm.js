import React, { useState } from 'react';

const ProductForm = (props) => {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');

  const handleAddProduct = () => {
    if (productId && productName && sellingPrice) {
      props.addProduct({ id: productId, name: productName, price: parseFloat(sellingPrice) });
      setProductId('');
      setProductName('');
      setSellingPrice('');
    }
  };

  return (
    <div>
      <label htmlFor="productId">Product ID:</label>
      <input type="text" id="productId" name="productId" value={productId} onChange={(e) => setProductId(e.target.value)} />
      
      <label htmlFor="productName">Product Name:</label>
      <input type="text" id="productName" name="productName" value={productName} onChange={(e) => setProductName(e.target.value)} />

      <label htmlFor="sellingPrice">Selling Price:</label>
      <input type="text" id="sellingPrice" name="sellingPrice" value={sellingPrice} onChange={(e) => setSellingPrice(e.target.value)} />

      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default ProductForm;