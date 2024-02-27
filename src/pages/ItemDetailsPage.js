import React from 'react';
import { ItemsProvider } from '../context-and-reducer/items/itemsContext';
import { StockProvider } from '../context-and-reducer/stock/stockContext';
import ItemDetails from '../components/items/item/ItemDetails';

const ItemDetailsPage = () => {
  return (
    <ItemsProvider>
      <StockProvider>
        <p>ItemDetailsPage</p>
        <ItemDetails />
      </StockProvider>
    </ItemsProvider>
  );
};
export default ItemDetailsPage;
