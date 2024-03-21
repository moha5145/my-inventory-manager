import React from 'react';
import { ItemsProvider } from '../context-and-reducer/items/itemsContext';
import { CategoriesProvider } from '../context-and-reducer/categories/categoriesContext';

import ItemList from '../components/items/ItemList';

const ItemsPage = () => {
  return (
    <section>
      <ItemsProvider>
        <CategoriesProvider>
          <ItemList />
        </CategoriesProvider>
      </ItemsProvider>
    </section>
  );
};
export default ItemsPage;
