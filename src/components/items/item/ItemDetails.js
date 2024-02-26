import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ItemDetails = () => {
    const location = useLocation();
    const { state } = location;
    const navigate = useNavigate();
  return (
    <div className='flex gap-4 justify-between'>

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

      <div className='w-1/3 border border-gray-300 rounded-md p-2 shadow-md'>
        <p>Current Status</p>
        <h3 className='text-3xl'>{state.stock}</h3>
        <div className='group'>
          <button className='border px-6'>In</button>
          <button className='border px-6'>Out</button>
          {/* <button>In</button> */}
        </div>
      </div>
    </div>
  );
};
export default ItemDetails;
