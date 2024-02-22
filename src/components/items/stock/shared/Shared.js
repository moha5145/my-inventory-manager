import React from 'react';

import { DateInput, SelectInput, TextInput } from '../../../../shared/CustomInputs';
import ItemsList from './ItemsList';
import UpdateStock from './UpdateStock';

const Shared = ({title, itemsState, updateItem, setNewItems, newItems, updateTemporaryNewStock, operationSign}) => {
  return (
    <div >
        <h2>{title}</h2>
        <div className="flex gap-4" >
            <div className="flex-1 ">
                <h3 className='border-b border-gray-200 pb-4 '> Select Item </h3>
                <div className='flex flex-col gap-2 my-2'>
                    <SelectInput />
                    <TextInput />
                </div>

                <ItemsList
                    itemsState={itemsState}
                    updateItem={updateItem}
                    setNewItems={setNewItems}
                    newItems={newItems}
                    updateTemporaryNewStock={updateTemporaryNewStock}
                    operationSign={operationSign}
                />
            </div>
            <div className="flex-1 h-44">
                <h3 className='border-b border-gray-200 pb-4 '> Stock In </h3>
                <DateInput
                    type='date'
                />
                <UpdateStock
                    newItems={newItems}
                    setNewItems={setNewItems}
                    updateItem={updateItem}
                    updateTemporaryNewStock={updateTemporaryNewStock}
                    operationSign={operationSign}
                />
            </div>
        </div>
    </div>
  );
};
export default Shared;
