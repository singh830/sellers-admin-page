import React, { useState, useEffect } from 'react';
import './Input.css';

const Input = () => {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState('');
  const [price, setPrice] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) {
      setProducts(storedProducts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleAddProduct = () => {
    const newProduct = {
      id: productId,
      price,
      name,
      category
    };
    setProducts([...products, newProduct]);
    setProductId('');
    setPrice('');
    setName('');
    setCategory('');
  };

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div className='container'>
      <h1>Seller Admin Page</h1>
      <div>
        <label htmlFor="productId">Product ID:</label>
        <input type="text" id="productId" value={productId} onChange={(e) => setProductId(e.target.value)} />
      </div>
      <div>
        <label htmlFor="price">Selling Price:</label>
        <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div>
        <label htmlFor="name">Product Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Choose a category</option>
          <option value="electronic">Electronic</option>
          <option value="skincare">Skin Care</option>
          <option value="food">Food Items</option>
        </select>
      </div>
      <button onClick={handleAddProduct}>Add Product</button>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            ID: {product.id}, Name: {product.name}, Price: {product.price}, Category: {product.category}
            <button className='delete-btn' onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Input;
