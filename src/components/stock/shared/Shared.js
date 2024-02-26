import React from 'react';

import { SelectInput, TextInput } from '../../../shared/CustomInputs';
import ItemsList from './ItemsList';
import UpdateStock from './UpdateStock';

const Shared = ({
    title,
    itemsState,
    updateItem,
    updateTemporaryNewStock,
    resetTemporaryNewStock,
    operationSign,
    stockType,
    stockState,
    addStock,
    updateStock,
    deleteStock,
    cancelStocks,
    confirmStocks,
    confirmTemporaryStock
}) => {
  return (
    <div >
        <h2 className={`border-b-2 pb-2 mb-4 ${stockType === 'in' ? 'border-green-400' : 'border-red-500'}`} >{title}</h2>
        <div className="md:flex gap-4" >
            <div className="flex-3 ">
                <h3 className='border-b border-gray-200 pb-4 '> Select Item </h3>
                <div className='flex flex-col gap-2 my-2'>
                    <SelectInput />
                    <TextInput />
                </div>

                <ItemsList
                    itemsState={itemsState}
                    updateItem={updateItem}
                    updateTemporaryNewStock={updateTemporaryNewStock}
                    operationSign={operationSign}
                    stockType={stockType}
                    stockState={stockState} 
                    addStock={addStock}
                    updateStock={updateStock}
                />
            </div>
            <div className="flex-1 h-44">
                <h3 className='border-b border-gray-200 pb-4 '> {title} </h3>
                {/* <div className='py-2'>
                    <DateInput
                        type='date'
                    />
                </div> */}
                <UpdateStock
                    updateItem={updateItem}
                    resetTemporaryNewStock={resetTemporaryNewStock}
                    updateTemporaryNewStock={updateTemporaryNewStock}
                    operationSign={operationSign}
                    stockType={stockType}
                    stockState={stockState} 
                    addStock={addStock}
                    updateStock={updateStock}
                    deleteStock={deleteStock}
                    cancelStocks={cancelStocks}
                    confirmStocks={confirmStocks}
                    confirmTemporaryStock={confirmTemporaryStock}
                />
            </div>
        </div>
    </div>
  );
};
export default Shared;
