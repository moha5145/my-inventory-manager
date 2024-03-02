import React from 'react';

const ItemsList = ({itemsState, updateTemporaryNewStock, stockState, stockType, addStock, updateStock}) => {

  const handleClick = (item, index) => {
    const newStockValue =  item.newStock + 1;
    const existingItem = stockState.stocks.find(i => i.itemId === item._id);
    updateTemporaryNewStock(item._id, newStockValue);
    if (existingItem) {
      updateStock('stock', index, newStockValue)
    } else {
      const newItem = {...item, stockType};
      addStock(newItem);
    }
  }
  
  return (
    <div className='flex flex-col gap-2 pr-1 h-[50vh] overflow-y-auto'>
      {itemsState.items.map((item, index) => (
        <div
          key={item._id}
          className={`flex justify-between gap-1  rounded-md cursor-pointer ${stockType === 'in' ? 'hover:bg-green-50 active:bg-green-100' : 'hover:bg-red-50 active:bg-red-100'} `}
          onClick={() => handleClick(item, index)}
        >
          <div className='flex gap-2'>
            <div className='w-16 h-16 bg-slate-200'>
              <img src={item.image} alt="" />
            </div>
            <div className='flex flex-col'>
              <span>{item.name}</span>
              <span className='text-xs text-gray-400'>
                {item.purchasePrice} / {item.category} / {item.brand} / {item.model}
              </span>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <span>{item.stock}</span>
            {item.newStock === 0 ? null : (
              <span className={`text-sm ${stockType === "in" ? "text-green-500" : "text-red-500"} `}>
                {stockType === "in" ? "+" : "-"} {item.newStock}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemsList;
