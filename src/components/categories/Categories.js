import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState([
    { _id: 1, name: 'Smartphones' },
    { _id: 2, name: 'Accessories' },
    { _id: 3, name: 'Tablets' },
    // Ajoutez d'autres catégories si nécessaire
  ]);

  const [newCategory, setNewCategory] = useState('');

  const handleChange = (e) => {
    setNewCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCategory.trim() !== '') {
      const newCategoryObj = {
        _id: categories.length + 1,
        name: newCategory.trim()
      };
      setCategories([...categories, newCategoryObj]);
      setNewCategory('');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Categories Management</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center">
          <input type="text" value={newCategory} onChange={handleChange} placeholder="New Category" className="w-full mr-2 p-2 border border-gray-300 rounded-md" />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Add Category</button>
        </div>
      </form>
      <ul className="mt-4">
        {categories.map(category => (
          <li key={category._id} className="flex items-center justify-between border-b border-gray-200 py-2">
            <Link to={`/categories/${category.id}`} className="text-blue-500 hover:underline">{category.name}</Link>
            <button className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
