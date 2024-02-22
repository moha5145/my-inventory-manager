import React from 'react';
import { ItemsProvider } from '../context-and-reducer/items/itemsContext';
import StockOut from '../components/items/stock/stockOut/StockOut';

const StockOutPage = () => {
  return (
    <ItemsProvider>
      <StockOut />
    </ItemsProvider>
  );
};
export default StockOutPage;
