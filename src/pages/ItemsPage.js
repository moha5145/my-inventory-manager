import React from 'react';
import { ItemsProvider } from '../context-and-reducer/items/itemsContext';
import Items from '../components/items/Items';

const ItemsPage = () => {
  return (
    <section>
      <ItemsProvider>
        <p>ItemsPage</p>
        <Items />
      </ItemsProvider>
    </section>
  );
};
export default ItemsPage;
