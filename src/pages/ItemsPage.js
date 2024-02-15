import React from 'react';
import { ItemsProvider } from '../context-and-reducer/items/itemsContext';
import Items from '../components/items/Items';

const ItemsPage = () => {
  return (
    <section>
      <ItemsProvider>
        <Items />
      </ItemsProvider>
    </section>
  );
};
export default ItemsPage;
