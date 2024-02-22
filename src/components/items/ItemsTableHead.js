import React from 'react';

import { SearchInput } from '../../shared/CustomInputs';

const tHeaderText = ["#", "Name", "Brand", "Category", "Model", "Purchase $", "Purchase date", "Stock", "Supplier", "Serial N°", "Actions"];

const TableHeader = () => {
  return tHeaderText.map((text, index) => {
    return <>
      <th key={index} className='h-12 text-left text-xs sm:text-md mb-[0.017rem]'>
        <div className=''>
          <span className=''>
            {text}
          </span>

          {text !== "#" && text !== "Actions" ?
          <div className='hidden sm:block'>
            <SearchInput
                type="text"
                placeholder="test"
                onChange={(e) => e.target.value}
                value=''
            />
          </div>
            : <div className='sm:py-7 bg-blue-400'></div>
          }
        </div>  
      </th>
    </> 
  });
};

const ItemsTableHead = ({itemsState}) => {
  return (
    <thead className="text-white flex-1 sm:[&>*:not(:first-child)]:hidden">
        { itemsState.items.map((item) => {
          return ( 
            <tr key={item.id} className="  bg-blue-400 flex flex-col flex-no wrap justify-center sm:table-row rounded-l-lg sm:rounded-none mb-5 sm:mb-0">
              <TableHeader />
            </tr>
          )})
        }
    </thead>
  );
};
export default ItemsTableHead;
