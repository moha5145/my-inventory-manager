import React, { useContext } from 'react';

import { ItemsContext } from '../../context-and-reducer/items/itemsContext';

import ItemsTableHead from './ItemsTableHead';
import ItemsTableBody from './ItemsTableBody';
import AddItem from './AddItem';
import { SearchInput } from '../../shared/CustomInputs';
import Modal from '../custom/Modal';

const Items = () => {
    const { itemsState, itemsDispatch, handleAddItem, updateItem, deleteItem  } = useContext(ItemsContext);
    
    return (
        <div className='w-full overflow-x-auto '>
            <div className='hidden md:block'>
                <AddItem handleAddItem={handleAddItem}/>
            </div>

            <Modal btnText="Add Item" id={"add-item-modal"}>
                <AddItem handleAddItem={handleAddItem}/>
            </Modal>

            <div className="container gap-4 mt-10 sm:mt-0">
                <p className='sm:hidden text-2xl'>Items List</p>
                    <div className='mt-4 mb-2'>
                        <SearchInput
                            type="text"
                            placeholder="test"
                            onChange={(e) => e.target.value}
                            value=''
                        />
                    </div>
                <table className="table-auto  h-full sm:inline-block flex flex-row flex-no-wrap sm:bg-white rounded-lg sm:shadow-lg">
                    
                    <ItemsTableHead
                        itemsState={itemsState}
                    />
                    
                    <ItemsTableBody
                        itemsState={itemsState}
                        itemsDispatch={itemsDispatch}
                        updateItem={updateItem}
                        deleteItem={deleteItem}
                    />
                </table> 
            </div>
        </div>
    );
};
export default Items;
