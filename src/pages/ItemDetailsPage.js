import React from 'react';
import { ItemsProvider } from '../context-and-reducer/items/itemsContext';
import ItemDetails from '../components/items/item/ItemDetails';

const ItemDetailsPage = () => {
  return (
    <ItemsProvider>
      <p>ItemDetailsPage</p>
      <ItemDetails />
    </ItemsProvider>
  );
};
export default ItemDetailsPage;
