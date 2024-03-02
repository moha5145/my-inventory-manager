import React from 'react';
import OutlineBtn from '../../customButtons/OutlineBtn';
import ColoredBtn from '../../customButtons/ColoredBtn';
import { useNavigate } from 'react-router-dom';

const Confirm = ({ cancelStocks, stockType, resetTemporaryNewStock, confirmTemporaryStock, confirmStocks}) => {
  const cancelHandler = () => {
    cancelStocks()
    resetTemporaryNewStock()
  }

  const confirmHandler = () => {  
    confirmStocks()
    confirmTemporaryStock(stockType)
  }

  const navigate = useNavigate();
  return (
    <div className='flex justify-evenly gap-2'>
        <OutlineBtn text='Return' onClick={() => navigate(-1)} textColor='orange-400' borderColor='orange-400'/>
        <ColoredBtn text='Cancel' onClick={cancelHandler} textColor='text-white' bgColor='bg-orange-400'/>
        <ColoredBtn text='Confirm' onClick={confirmHandler} textColor='text-white' />
    </div>
  );
};
export default Confirm;
