import React from 'react';
import OutlineBtn from '../../customButtons/OutlineBtn';
import ColoredBtn from '../../customButtons/ColoredBtn';

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
        <OutlineBtn text='Cancel' onClick={cancelHandler} />
        <ColoredBtn text='Confirm' onClick={confirmHandler} textColor='text-white' />
    </div>
  );
};
export default Confirm;
