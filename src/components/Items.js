import React, { useContext } from 'react';
import { ItemsContext } from '../context-and-reducer/items/usersContext';

const Items = () => {
    const { itemsState, itemsDispatch } = useContext(ItemsContext);
    return (
        <div>
            <p>Items</p>
            { itemsState.items.map((item, index) => {
                return (
                <div key={index}>
                    <h1>{item.name}</h1>
                </div>
                );
            })}
        </div>
    );
};
export default Items;
