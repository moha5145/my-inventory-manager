import React from 'react';

import { ItemsProvider } from '../context-and-reducer/items/itemsContext';

import ItemCreate from '../components/items/item/ItemCreate';

const ItemCreatePage = () => {
  return (
    <ItemsProvider>
      <p>ItemCreatePage</p>
      <ItemCreate />
    </ItemsProvider>
  );
};
export default ItemCreatePage;
