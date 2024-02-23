import React from 'react';

const Confirm = ({ cancelStocks, stockType, resetTemporaryNewStock, confirmTemporaryStock, confirmStocks}) => {
  const cancelHandler = () => {
    cancelStocks()
    resetTemporaryNewStock()
  }

  const confirmHandler = () => {  
    confirmStocks()
    confirmTemporaryStock(stockType)
  }
  return (
    <div className='flex justify-evenly gap-2'>
        <button onClick={confirmHandler} className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-md">
            Confirm
        </button>

        <button onClick={cancelHandler} className="flex-1 px-4 py-2 bg-red-500 text-white rounded-md">
            Clear
        </button>
    </div>
  );
};
export default Confirm;
