import React from 'react';

const ItemsList = ({itemsState, setNewItems, newItems, updateTemporaryNewStock, operationSign}) => {

  const handleClick = (item) => {
    const newStockValue =  item.newStock + 1 ;
    const existingItem = newItems.find(i => i.id === item.id);
    updateTemporaryNewStock(item, newStockValue);
    if (existingItem) {
      setNewItems(newItems.map(element => (element.id === item.id ? { ...element, newStock: newStockValue } : element)));
    } else {
      setNewItems([...newItems, { ...item, newStock: newStockValue }]);
    }
  }
  
  return (
    <div className='flex flex-col gap-2 h-[50vh] overflow-y-auto'>
      {itemsState.items.map((item) => (
        <div
          key={item.id}
          className='flex justify-between gap-1  rounded-md cursor-pointer hover:bg-gray-50 active:bg-gray-300'
          onClick={() => handleClick(item)}
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
              <span className={`text-sm ${operationSign === "+" ? "text-green-500" : "text-red-500"} `}>
                {operationSign === "+" ? "+" : "-"} {item.newStock}
              </span>
            )}
            
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemsList;
