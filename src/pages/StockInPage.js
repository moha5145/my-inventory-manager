import React from 'react';
import { ItemsProvider } from '../context-and-reducer/items/itemsContext';

import StockIn from '../components/items/stock/stockIn/StockIn';

const ItemInPage = () => {
  return (
    <section>
      <ItemsProvider>
        <StockIn />
      </ItemsProvider>
    </section>
    )
};
export default ItemInPage;
