import React, { useContext } from 'react';

import { ItemsContext } from '../../context-and-reducer/items/itemsContext';

import ItemsTableHead from './ItemsTableHead';
import ItemsTableBody from './ItemsTableBody';
import AddItem from './AddItem';

const Items = () => {
    const { itemsState, itemsDispatch, handleAddItem, updateItem, deleteItem  } = useContext(ItemsContext);
    
    return (
        <div className='w-full overflow-x-auto '>
            <p>Items</p>

            <AddItem handleAddItem={handleAddItem}/>

            <div className="container gap-4">
                <table className="h-full sm:inline-block w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
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
