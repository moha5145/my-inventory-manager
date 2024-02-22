import React from 'react';

const Total = ({totalItem, totalQuantity}) => {
  return (
    <div className='flex justify-between border-t border-b border-gray-200 my-4 py-4'>
        <div className='flex gap-4'>
            <span>
                total
            </span>

            <span>
                Number of Items : {totalItem}
            </span>
        </div>

        <div>
            Total Quantity : {totalQuantity}
        </div>
    </div>
  );
};
export default Total;
