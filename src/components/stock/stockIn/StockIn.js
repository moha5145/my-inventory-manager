import React, { useContext, useEffect } from 'react';

import { ItemsContext } from '../../../context-and-reducer/items/itemsContext';
import { StockContext } from '../../../context-and-reducer/stock/stockContext';

import Shared from '../shared/Shared';

const ItemIn = () => {
    const { itemsState,getItems, updateTemporaryNewStock, resetTemporaryNewStock, confirmTemporaryStock, updateItem } = useContext(ItemsContext);
    const { stockState, addStock, updateStock, deleteStock, cancelStocks, confirmStocks } = useContext(StockContext);

    useEffect(() => {
        getItems();
        // eslint-disable-next-line 
    }, []);
    
    return (
    <>
        <Shared
            title="Stock In"
            itemsState={itemsState}
            updateItem={updateItem}
            updateTemporaryNewStock={updateTemporaryNewStock}
            resetTemporaryNewStock={resetTemporaryNewStock}
            operationSign="+"
            stockType="in"
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
export default ItemIn;
