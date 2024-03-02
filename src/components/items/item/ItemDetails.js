import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { StockContext } from '../../../context-and-reducer/stock/stockContext';

import StocksByItemId from './StocksByItemId';

const ItemDetails = () => {
  const { stockState, addStock, getStocksByItemId  } = useContext(StockContext);
    const location = useLocation();
    const { state } = location;
    const navigate = useNavigate();

    useEffect(() => {
        getStocksByItemId(state._id)
    }, [])

  return (
    <div className='h-[calc(100vh-310px)] flex gap-4 justify-between'>

      <div className='w-2/3 flex flex-col gap-4'>
        <p className='text-2xl pb-2'>Item details</p>
        <div className='border-t-2 py-4'>
          <p>Name: {state.name}</p>
          <p>Model: {state.model}</p>
          <p>Stock: {state.stock}</p>
        </div>

        <div className='border-t-2 py-4'>
          <p>Category: {state.category}</p>
          <p>Brand: {state.brand}</p>
        </div>


        <button className='bg-white border-2 w-28 rounded-md' onClick={() => navigate(-1)}>
          Back
        </button>
      </div>

      <StocksByItemId
        stockState={stockState}
        state={state}
        addStock={addStock}
      />
    </div>
  );
};
export default ItemDetails;
