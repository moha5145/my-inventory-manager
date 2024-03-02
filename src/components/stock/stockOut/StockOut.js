import React, { useContext, useEffect } from 'react';

import { ItemsContext } from '../../../context-and-reducer/items/itemsContext';
import { StockContext } from '../../../context-and-reducer/stock/stockContext';

import Shared from '../shared/Shared';

const StockOut = () => {

  const { itemsState, getItems, updateTemporaryNewStock, resetTemporaryNewStock, confirmTemporaryStock,  updateItem } = useContext(ItemsContext);
  const { stockState, addStock, updateStock, deleteStock, cancelStocks, confirmStocks } = useContext(StockContext);

  useEffect(() => {
        getItems();
    }, []);

  return (
    <>
      <Shared
        title="Stock Out"
        itemsState={itemsState}
        updateItem={updateItem}
        updateTemporaryNewStock={updateTemporaryNewStock}
        resetTemporaryNewStock={resetTemporaryNewStock}
        operationSign="-"
        stockType="out"
        stockState={stockState} 
        addStock={addStock}
        updateStock={updateStock}
        deleteStock={deleteStock}
        cancelStocks={cancelStocks}
        confirmStocks={confirmStocks}
        confirmTemporaryStock={confirmTemporaryStock}
      />
    </>
  );
};
export default StockOut;
