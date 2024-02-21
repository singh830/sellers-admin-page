import React, { useState, useEffect } from 'react';
import './Input.css';

function Input() {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [category, setCategory] = useState('fooditem');

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleAddProduct = () => {
    const newProduct = {
      id: productId,
      name: productName,
      price: sellingPrice,
      category: category
    };
    setProducts([...products, newProduct]);
    // Clear input fields after adding the product
    setProductId('');
    setProductName('');
    setSellingPrice('');
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  return (
    <div className="App">
      <h1>Sellers Admin Page</h1>
      <div className="form-container">
        <label htmlFor="productId">Product ID:</label>
        <input
          type="text"
          id="productId"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <label htmlFor="sellingPrice">Selling Price:</label>
        <input
          type="text"
          id="sellingPrice"
          value={sellingPrice}
          onChange={(e) => setSellingPrice(e.target.value)}
        />
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="fooditem">Food Item</option>
          <option value="skincareitem">Skincare Item</option>
          <option value="electronicitem">Electronic Item</option>
        </select>
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      <div className="category-list">
        <h2>Categories</h2>
        <div className="category">
          <h3>Food Items</h3>
          <ul>
            {products
              .filter((product) => product.category === 'fooditem')
              .map((product, index) => (
                <li key={index}>
                  <strong>Product ID:</strong> {product.id}, 
                  <strong> Product Name:</strong> {product.name}, 
                  <strong> Selling Price:</strong> {product.price}
                  <button onClick={() => handleDeleteProduct(index)}>Delete</button>
                </li>
              ))}
          </ul>
        </div>
        <div className="category">
          <h3>Skincare Items</h3>
          <ul>
            {products
              .filter((product) => product.category === 'skincareitem')
              .map((product, index) => (
                <li key={index}>
                  <strong>Product ID:</strong> {product.id}, 
                  <strong> Product Name:</strong> {product.name}, 
                  <strong> Selling Price:</strong> {product.price}
                  <button onClick={() => handleDeleteProduct(index)}>Delete</button>
                </li>
              ))}
          </ul>
        </div>
        <div className="category">
          <h3>Electronic Items</h3>
          <ul>
            {products
              .filter((product) => product.category === 'electronicitem')
              .map((product, index) => (
                <li key={index}>
                  <strong>Product ID:</strong> {product.id}, 
                  <strong> Product Name:</strong> {product.name}, 
                  <strong> Selling Price:</strong> {product.price}
                  <button onClick={() => handleDeleteProduct(index)}>Delete</button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Input;
