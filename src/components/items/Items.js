import React, { useContext } from 'react';

import { ItemsContext } from '../../context-and-reducer/items/itemsContext';

import ItemsTableHead from './ItemsTableHead';
import ItemsTableBody from './ItemsTableBody';
import AddItem from './item/AddItemInputs';
import { SearchInput } from '../../shared/CustomInputs';
import OutlineLink from '../customLinks/OutlineBtn';

const Items = () => {
    const { itemsState, itemsDispatch, handleAddItem, updateItem, deleteItem  } = useContext(ItemsContext);
    
    return (
        <div className='w-full overflow-x-auto rounded-md py-1'>
            <div className='hidden md:block w-full'>
                <AddItem handleAddItem={handleAddItem} flexType="row"/>
            </div>

            <div className='flex justify-end pt-2 md:hidden'>
                <OutlineLink   
                    to='/items/create'
                    text={'+ Add Item'}
                    // bgColor='bg-gray-400'
                    textColor='text-gray-500'
                    px='px-2'
                />
            </div>
                {/* className='md:hidden p-4 my-10 self-end bg-green-500 text-white text-2xl rounded-md'> */}
               
            {/* <Modal btnText="Add Item" id={"add-item-modal"}>
                <AddItem handleAddItem={handleAddItem}/>
            </Modal> */}


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
