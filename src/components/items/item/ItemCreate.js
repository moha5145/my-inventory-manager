import React, { useContext } from 'react';

import AddItemInputs from './AddItemInputs';
import { ItemsContext } from '../../../context-and-reducer/items/itemsContext';

const ItemCreate = () => {
  const { handleAddItem  } = useContext(ItemsContext);
  return (
    <>
      <p>ItemCreate</p>
      <AddItemInputs handleAddItem={handleAddItem}/>
    </>
  );
};
export default ItemCreate;
