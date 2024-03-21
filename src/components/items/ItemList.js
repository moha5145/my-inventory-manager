
import React, { useContext, useEffect } from 'react';

import { ItemsContext } from '../../context-and-reducer/items/itemsContext';
import { CategoriesContext } from '../../context-and-reducer/categories/categoriesContext';

import ItemsTableHead from './ItemsTableHead';
import ItemsTableBody from './ItemsTableBody';
import AddItem from './item/AddItemInputs';
import { SearchInput } from '../../shared/CustomInputs';
import OutlineLink from '../customLinks/OutlineBtn';

const ItemList = () => {
    const { itemsState, getItems, onChangeItem, saveUpdate, itemsDispatch, handleAddItem, updateItem, deleteItem, toggleModal } = useContext(ItemsContext);
    const { categoriesState, getCategories, onChangeCategory, addCategory } = useContext(CategoriesContext);

    useEffect(() => {
        getItems();
        getCategories()
        // eslint-disable-next-line 
    }, []);
    
    return (
        itemsState.isLoading ? <p>Loading...</p> :
            <div className='w-full overflow-x-auto rounded-md py-1'>
                <div className='hidden md:block w-full'>
                    <AddItem
                        handleAddItem={handleAddItem}
                        flexType="row"
                        categoriesState={categoriesState}
                        toggleModal={toggleModal}
                        itemsState={itemsState}
                        onChangeCategory={onChangeCategory}
                        onChangeItem={onChangeItem}
                        addCategory={addCategory}
                    />
                </div>

                <div className='flex justify-end pt-2 md:hidden'>
                    <OutlineLink
                        to='/items/create'
                        text={'+ Add Item'}
                        textColor='text-gray-500'
                        px='px-2'
                    />
                </div>

                {/* <Modal btnText="Add Item" id={"add-item-modal"}>
                    <AddItem handleAddItem={handleAddItem}/>
                    </Modal> 
                */}

                <div className="container w-full gap-4 mt-2 sm:mt-0">
                    <p className='sm:hidden text-2xl'>Items List</p>
                    <div className='mt-4 mb-2'>
                        <SearchInput
                            type="text"
                            placeholder="test"
                            onChange={(e) => e.target.value}
                            value=''
                        />
                    </div>
                    <table className="table-fixed h-full sm:inline-block flex flex-row flex-no-wrap sm:bg-white rounded-lg">

                        <ItemsTableHead
                            itemsState={itemsState}
                        />

                        <ItemsTableBody
                            itemsState={itemsState}
                            itemsDispatch={itemsDispatch}
                            updateItem={updateItem}
                            deleteItem={deleteItem}
                            saveUpdate={saveUpdate}
                            categoriesState={categoriesState}
                            addCategory={addCategory}
                            onChangeItem={onChangeItem}
                            onChangeCategory={onChangeCategory}
                            toggleModal={toggleModal}
                        />
                    </table>
                </div>
            </div>
    );
};

export default ItemList;
