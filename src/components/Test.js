// ProductManagement.js

import React, { useContext, useState } from 'react';
import { ItemsContext } from '../context-and-reducer/items/itemsContext';

const ProductManagement = () => {
  const { itemsState, deleteProduct } = useContext(ItemsContext);
  const [formData, setFormData] = useState({
    _id: '',
    name: '',
    description: '',
    price: '',
    quantity: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData._id) {
    //   updateProduct(formData);
    } else {
    //   addProduct(formData);
    }
    setFormData({
      _id: '',
      name: '',
      description: '',
      price: '',
      quantity: '',
    });
  };

  const handleEdit = (product) => {
    setFormData(product);
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Product Management</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input type="hidden" name="id" value={formData._id} />
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} className="w-full border rounded-md p-2" />
          <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full border rounded-md p-2" />
          <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className="w-full border rounded-md p-2" />
          <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} className="w-full border rounded-md p-2" />
        </div>
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Save Product</button>
      </form>
      <div>
        <h3 className="text-lg font-semibold mb-2">Product List</h3>
        <ul>
          {itemsState.items.map(product => (
            <li key={product._id} className="border-b border-gray-200 py-4">
              <p className="font-semibold">{product.name}</p>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <button onClick={() => handleEdit(product)} className="ml-2 px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">Edit</button>
              <button onClick={() => deleteProduct(product._id)} className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductManagement;