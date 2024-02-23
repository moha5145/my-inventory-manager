import React from 'react';

import { ItemsProvider } from '../context-and-reducer/items/itemsContext';
import { StockProvider } from '../context-and-reducer/stock/stockContext';

import StockOut from '../components/items/stock/stockOut/StockOut';

const StockOutPage = () => {
  return (
    <ItemsProvider>
        <StockProvider>
          <StockOut />
        </StockProvider>
    </ItemsProvider>
  );
};
export default StockOutPage;
