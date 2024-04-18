import React, { useContext, useEffect } from 'react';

import AddItemInputs from './AddItemInputs';
import { ItemsContext } from '../../../context-and-reducer/items/itemsContext';
import { CategoriesContext } from '../../../context-and-reducer/categories/categoriesContext';

const ItemCreate = () => {
  const { handleAddItem, toggleModal, itemsState, onChangeItem  } = useContext(ItemsContext);
  const { categoriesState, getCategories, onChangeCategory, addCategory} = useContext(CategoriesContext)

  useEffect(() => {
    getCategories()
    // eslint-disable-next-line 
  }, []);
  return (
    <>
      <AddItemInputs
        handleAddItem={handleAddItem}
        categoriesState={categoriesState}
        toggleModal={toggleModal}
        itemsState={itemsState}
        onChangeItem={onChangeItem}
        onChangeCategory={onChangeCategory}
        addCategory={addCategory}
      />
    </>
  );
};
export default ItemCreate;
