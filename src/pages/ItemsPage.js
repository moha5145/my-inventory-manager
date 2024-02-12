import React from 'react';
import { ItemsProvider } from '../context-and-reducer/items/usersContext';
import Items from '../components/Items';

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
