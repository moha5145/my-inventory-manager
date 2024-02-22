import React, { useContext, useState } from 'react';

import { ItemsContext } from '../../../../context-and-reducer/items/itemsContext';
import Shared from '../shared/Shared';

const ItemIn = () => {
    const { itemsState, updateTemporaryNewStock,  updateItem } = useContext(ItemsContext);
    const [newItems, setNewItems] = useState([]);

    return (
    <>
        <Shared
            title="Stock In"
            itemsState={itemsState}
            updateItem={updateItem}
            setNewItems={setNewItems}
            newItems={newItems}
            updateTemporaryNewStock={updateTemporaryNewStock}
            operationSign="+"
        />
    </>
  );
};
export default ItemIn;
