import React from 'react';
import { ItemsProvider } from '../context-and-reducer/items/itemsContext';
import { StockProvider } from '../context-and-reducer/stock/stockContext';

import StockIn from '../components/stock/stockIn/StockIn';

const ItemInPage = () => {
  return (
    <section>
      <ItemsProvider>
        <StockProvider>
          <StockIn />
        </StockProvider>
      </ItemsProvider>
    </section>
    )
};
export default ItemInPage;
