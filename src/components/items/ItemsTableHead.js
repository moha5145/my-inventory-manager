import React from 'react';

const tHeaderText = ["#", "Name", "Brand", "Category", "Model", "Purchase $", "Purchase date", "Quantity", "Supplier", "Serial N°", "Actions"];

const TableHeader = () => {
  return tHeaderText.map((text, index) => {
    return <th key={index} className='h-12 p-3 text-left text-xs sm:text-md mb-[0.015rem]'>{text}</th>;
  });
};

const ItemsTableHead = ({itemsState}) => {
  return (
    <thead className="text-white flex-1">
        { itemsState.items.map((_, index) => {
          return ( 
            <tr key={index} className="bg-blue-400 flex flex-col flex-no wrap justify-center sm:table-row rounded-l-lg sm:rounded-none mb-5 sm:mb-0">
              <TableHeader />
            </tr>
          )})
        }
    </thead>
  );
};
export default ItemsTableHead;
