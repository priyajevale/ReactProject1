import React, { useState, useEffect } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    localStorage.setItem(newProduct.id, JSON.stringify({ name: newProduct.name, price: newProduct.price }));
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
    localStorage.removeItem(id);
  };

  const calculateTotalValue = () => {
    const totalValue = products.reduce((acc, product) => acc + product.price, 0);
    return totalValue.toFixed(2);
  };

  return (
    <div className="App">
      <h1>Product Management App</h1>
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} deleteProduct={deleteProduct} calculateTotalValue={calculateTotalValue} />
    </div>
  );
}

export default App;