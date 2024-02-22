import React from 'react';

import { NumberInput } from '../../../../shared/CustomInputs';
import Total from './Total';
import Confirm from './Confirm';

const UpdateStock = ({newItems, updateItem, updateTemporaryNewStock, setNewItems }) => {

    const handleChange = (e, item) => {
        const value = Number(e.target.value)
        const updatedItems = newItems.map((element) => 
            element.id === item.id ? { ...element, newStock: value } : element
        );
        setNewItems(updatedItems);
        updateTemporaryNewStock(item, value);
    }

    const handleClose = (item) => {
        updateTemporaryNewStock(item, 0)
        const updatedItems = newItems.filter(element => element.id !== item.id);
        setNewItems(updatedItems)
    }

    const totalItem = newItems.length
    const totalQuantity = newItems.reduce((total, item) => total + item.newStock, 0)
    
    return (
        <div >
            <div className='h-[50vh] overflow-y-auto'>

                {newItems.map((item) => {
                    return (
                        <div 
                            key={item.id}
                            className='flex justify-between gap-4 pb-1 rounded-md
                            cursor-pointer hover:bg-gray-50 active:bg-gray-400' 
                        >       
                            <div className='flex gap-2'>
                                <div className='w-16 h-16 bg-slate-200'>
                                    <img src={item.image} alt="" />
                                </div>
                                <div className='flex flex-col'>
                                <span>
                                    {item.name}
                                </span>
                                <span className='text-xs text-gray-400'>
                                    {item.purchasePrice} /
                                    {item.category} /
                                    {item.brand} /
                                    {item.model}
                                </span>
                            </div>
                            </div>

                            <div className='flex gap-2 justify-center items-center'>
                                <NumberInput
                                    type='number'
                                    value={item.newStock}
                                    min={1}
                                    onChange={(e) => handleChange(e, item)}
                                />
                                <button
                                    onClick={() => handleClose(item)}
                                    className='px-2 bg-red-500 text-white rounded-full'
                                >
                                    x
                                </button>  
                            </div>
                        </div>
                    )}
                )}
            </div>

            <Total
                totalItem={totalItem}
                totalQuantity={totalQuantity}
            />

            <Confirm
                updateItem={updateItem}
                setNewItems={setNewItems}
            />
        </div>
    );
};
export default UpdateStock;
