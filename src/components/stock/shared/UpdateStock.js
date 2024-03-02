import React from 'react';

import { DateInput, NumberInput } from '../../../shared/CustomInputs';
import Total from './Total';
import Confirm from './Confirm';

const date = new Date().toISOString().split('T')[0];
const UpdateStock = ({ updateItem, updateTemporaryNewStock, resetTemporaryNewStock, stockState, addStock, updateStock, deleteStock, stockType, cancelStocks, confirmStocks, confirmTemporaryStock }) => {

    const handleChange = (e, item, index) => {
        const value = e.target.type === 'number' ? Number(e.target.value) : e.target.value;

        if (e.target.name === 'stock') {
            updateTemporaryNewStock(item.itemId, value);
        }
        updateStock([e.target.name], index, value);
    }

    const handleClose = (item) => {
        updateTemporaryNewStock(item.itemId, 0);
        deleteStock(item);
    }

    const totalItem = stockState.stocks.length;
    const totalQuantity = stockState.stocks.reduce((total, item) => total + item.stock, 0);

    return (
        <>
            <div className='h-[50vh] overflow-y-auto'>

                {stockState.stocks.map((item, index) => {
                    return (
                        <div
                            key={item._id}
                            className={`flex justify-between gap-4 mb-1 rounded-md ${item.stockType === 'in' ? 'bg-green-100' : 'bg-red-100'} `}
                        >
                            <div className='flex gap-2'>
                                <div className='w-20 h-20 bg-slate-200'>
                                    <img src={item.image} alt="" />
                                </div>
                                <div className='flex flex-col min-w-20'>
                                    <span>
                                        {item.name}
                                    </span>
                                    <span className='text-xs text-gray-400'>
                                        {item.category} /
                                        {/* {item.purchasePrice} /
                      {item.brand} /
                      {item.model} */}
                                    </span>
                                </div>
                            </div>

                            <div className='flex gap-2 justify-center items-center'>                              

                                {item.stockType === 'in' ? 
                                    <div className='max-w-28'>
                                        <label className='text-xs'>Purchase Price</label>
                                        <NumberInput
                                            type='number'
                                            name='purchasePrice'
                                            placeholder='Purchase price'
                                            value={item.purchasePrice}
                                            min={0}
                                            onChange={(e) => handleChange(e, item, index)}
                                        />
                                    </div>
                                    :
                                    <div className='max-w-28'>
                                        <label className='text-xs'>Sale Price</label>
                                        <NumberInput
                                            type='number'
                                            name='salePrice'
                                            placeholder='Sale price'
                                            value={item.salePrice}
                                            min={0}
                                            onChange={(e) => handleChange(e, item, index)}
                                        />
                                    </div> 
                                }

                                {item.stockType === 'in' ?
                                    <div className='max-w-28'>
                                        <label className='text-xs'>Purchase Date</label>
                                        <DateInput
                                            type='date'
                                            name='purchaseDate'
                                            value={item.purchaseDate || date}
                                            onChange={(e) => handleChange(e, item, index)}
                                        />
                                    </div>
                                    :
                                    <div className='max-w-28'>
                                        <label className='text-xs'>Sale Date</label>
                                        <DateInput
                                            type='date'
                                            name='saleDate'
                                            value={item.saleDate || date}
                                            onChange={(e) => handleChange(e, item, index)}
                                        />
                                    </div>
                                }

                                <div className='max-w-28'>
                                    <label className='text-xs'>Quantity</label>
                                    <NumberInput
                                        type='number'
                                        name='stock'
                                        value={item.stock}
                                        min={1}
                                        onChange={(e) => handleChange(e, item, index)}
                                    />
                                </div>
                                <button
                                    onClick={() => handleClose(item)}
                                    className='px-2 bg-red-500 text-white rounded-full -mt-12 mr-1'
                                >
                                    x
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>

            <Total
                totalItem={totalItem}
                totalQuantity={totalQuantity}
            />

            <Confirm
                updateItem={updateItem}
                cancelStocks={cancelStocks}
                resetTemporaryNewStock={resetTemporaryNewStock}
                confirmStocks={confirmStocks}
                confirmTemporaryStock={confirmTemporaryStock}
                stockType={stockType}
            />
        </>
    );
};

export default UpdateStock;
