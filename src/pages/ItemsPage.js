import React from 'react';
import { ItemsProvider } from '../context-and-reducer/items/itemsContext';
import { CategoriesProvider } from '../context-and-reducer/categories/categoriesContext';

import Items from '../components/items/Items';

const ItemsPage = () => {
  return (
    <section>
      <ItemsProvider>
        <CategoriesProvider>
          <Items />
        </CategoriesProvider>
      </ItemsProvider>
    </section>
  );
};
export default ItemsPage;
