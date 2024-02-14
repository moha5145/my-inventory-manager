import './items.css'
import React, { useContext } from 'react';
import { ItemsContext } from '../../context-and-reducer/items/itemsContext';
import ItemsTableHead from './ItemsTableHead';
import ItemsTableBody from './ItemsTableBody';

const Items = () => {
    const { itemsState, itemsDispatch } = useContext(ItemsContext);
    return (
        <div className='w-full overflow-x-auto'>
            <p>Items</p>

            <div class="container">
                <table class="h-full md:inline-table w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                    <ItemsTableHead itemsState={itemsState}/>
                    
                    <ItemsTableBody itemsState={itemsState} itemsDispatch={itemsDispatch}/>
                </table> 
            </div>

        </div>
    );
};
export default Items;
