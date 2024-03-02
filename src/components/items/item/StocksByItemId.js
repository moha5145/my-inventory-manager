import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TbArrowBarToDown, TbArrowBarUp } from 'react-icons/tb';

const StocksByItemId = ({stockState, state, addStock}) => {
    const navigate = useNavigate();
  return (
    <div className='w-1/3 h-[calc(100vh-275px)] border border-gray-300 rounded-md p-2 shadow-md'>
        <p>Current Status</p>
        <h3 className='text-3xl text-center py-3'>{state.stock}</h3>
        <div className=' h-full'>
            <div className='flex  pb-2'>
                <button className='flex-1 border px-6' onClick={() => {addStock(state); navigate('/stock-in')}}>In</button>
                <button className='flex-1 border px-6' onClick={() => {addStock(state); navigate('/stock-out')}}>Out</button>
                <button className='flex-1 border px-6' onClick={() => {addStock(state); navigate('/stock-out')}}>Adjust</button>
            </div>

          {stockState.IsLoading ? <p>Loading...</p> :
            <div className='h-[82%] overflow-y-auto'>
              {stockState.stocksByItemId?.map((item, index) => (
                <div key={item._id} className="flex justify-between">
                  <div className="flex flex-col border-b pb-6">
                      {item.stockType === 'in' ? <div className='flex gap-2 items-center text-green-500'>
                        <TbArrowBarToDown />
                        <span className=''>Stock In</span> 
                      </div>
                      : 
                      <div className='flex gap-2 items-center text-red-500'>
                        <TbArrowBarUp />
                        <span className=''>Stock Out</span>
                        
                      </div> 
                      }
                    <span>
                      Item Name: {item.name}
                    </span>
                    <span>
                      Purchase date: {item.purchaseDate}
                    </span>

                    <span>
                      Sale date: {item.saleDate}
                    </span>

                    <span>
                      Purchase price: {item.purchasePrice}
                    </span>

                    {item.stockType === 'out' && <span>
                      Sale Price: {item.salePrice}
                      </span> 
                    }        
                  </div>
                  <div className="flex flex-col">
                    <p>{item.stock}</p>

                  </div>
                </div>
              ))}
            </div>
          }
        </div>
      </div>
  );
};
export default StocksByItemId;
