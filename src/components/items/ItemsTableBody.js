import React from 'react';

const TableCell = ({value}) => {
    return (
        <td className='border-grey-light border hover:bg-gray-100 h-12 p-3 '>{value}</td>
    )
}

const ItemsTableBody = ({itemsState, itemsDispatch}) => {
  return (
    <tbody className='flex-1 sm:flex-none'>
        { itemsState.items.map((item, index) => {
            return (       
                <tr key={index} className='flex flex-col flex-no wrap sm:table-row mb-5 sm:mb-0 justify-center' >
                    <TableCell value ={index+1} />
                    <TableCell value ={item.name} />
                    <TableCell value ={item.brand} />
                    <TableCell value ={item.category} />
                    <TableCell value ={item.model} />
                    <TableCell value ={item.purchasePrice} />
                    <TableCell value ={item.dateOfPurchase} />
                    <TableCell value ={item.quantity} />
                    <TableCell value ={item.supplier} />
                    <TableCell value ={item.serialNumber} />
                    
                    <td className='border-grey-light border hover:bg-gray-100 p-3 pb-[12.75px]'>
                        <div className="flex justify-center gap-1">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded">
                                Edit
                            </button>

                            <button class="bg-red-400 hover:opacity-60 text-white font-bold px-4 rounded">
                                Delete
                            </button>
                        </div>
                    </td>
                </tr>
            );
        })}
    </tbody>
  );
};
export default ItemsTableBody;
