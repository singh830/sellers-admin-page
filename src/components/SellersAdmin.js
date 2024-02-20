import React, { useState, useEffect } from 'react';
   
function SellersAdmin(props) {
    const deleteHandler = (index) => {
        props.deleteHandler(index);
    };

    const calculateTotalValue = () => {
        return props.productsData.reduce((total, product) => total + parseFloat(product.price), 0).toFixed(2);
    };
    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        ID: {product.id}, Name: {product.name}, Price: {product.price}, Category: {product.category}
                        <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                    </li>
                ))}
                <h3>Total Value Worth of Products: RS {calculateTotalValue()}</h3>
            </ul>
        </div>
    );
}
    
export default SellersAdmin;