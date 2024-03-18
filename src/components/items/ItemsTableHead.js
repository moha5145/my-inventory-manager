import React from 'react';

const tHeaderText = ["#", "Name", "Brand", "Category", "Model", "Serial N°", "Stock", "Actions"];

const TableHeader = () => {
  return tHeaderText.map((text, index) => {
    return <th
        key={index}
        className='first:w-4 w-20 sm:w-52 h-12 text-left text-xs sm:text-md mb-[0.017rem]'
      >
        {text}
      </th> 
  });
};

const ItemsTableHead = ({itemsState}) => {
  return (
    <thead className="w-full text-white sm:[&>*:not(:first-child)]:hidden">
        { itemsState.items.map((item) => {
          return ( 
            <tr key={item._id}
              className="px-1  bg-blue-400 flex flex-col flex-no wrap justify-center sm:table-row rounded-l-lg sm:rounded-none mb-5 sm:mb-0">
              <TableHeader />
            </tr>
          )})
        }
    </thead>
  );
};
export default ItemsTableHead;
