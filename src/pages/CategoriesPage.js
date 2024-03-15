import React from 'react';
import Categories from '../components/categories/Categories';
import { CategoriesProvider } from '../context-and-reducer/categories/categoriesContext';

const CategoriesPage = () => {
  return (
    <>
      <CategoriesProvider>
        <Categories />
      </CategoriesProvider>
    </>
  );
};
export default CategoriesPage;
