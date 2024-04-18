import React from 'react';

import { ItemsProvider } from '../context-and-reducer/items/itemsContext';
import { CategoriesProvider } from '../context-and-reducer/categories/categoriesContext';

import ItemCreate from '../components/items/item/ItemCreate';

const ItemCreatePage = () => {
  return (
    <ItemsProvider>
      <CategoriesProvider>
        <ItemCreate />
      </CategoriesProvider>
    </ItemsProvider>
  );
};
export default ItemCreatePage;
