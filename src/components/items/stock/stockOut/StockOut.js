import React, { useContext, useState } from 'react';
import { ItemsContext } from '../../../../context-and-reducer/items/itemsContext';
import Shared from '../shared/Shared';

const StockOut = () => {

  const { itemsState, updateTemporaryNewStock,  updateItem } = useContext(ItemsContext);
  const [newItems, setNewItems] = useState([]);
  return (
    <>
      <Shared
        title="Stock Out"
        itemsState={itemsState}
        updateItem={updateItem}
        setNewItems={setNewItems}
        newItems={newItems}
        updateTemporaryNewStock={updateTemporaryNewStock}
        operationSign="-"
      />
    </>
  );
};
export default StockOut;
