import React from 'react';
import { TextInput } from '../../shared/CustomInputs';

const TableCell = ({value, editing = false, index, name, updateItem, type, placeholder}) => {
    return (
        <td className='border-grey-light border hover:bg-gray-100 h-12 leading-10'>
            { editing ? (
                <TextInput
                    type={type}
                    placeholder={placeholder}
                    onChange={(e) => updateItem(e.target.value, index, name)}
                    value={value}
                />
                ) :
                <span>
                    
                    { value }
                </span>
            }
        </td>
    )
}

const ItemsTableBody = ({itemsState, itemsDispatch, updateItem, deleteItem}) => {
  return (
    <tbody className='flex-1 sm:flex-none'>
        { itemsState.items.map((item, index) => {

            return (       
                <tr key={index} className='flex flex-col flex-no wrap sm:table-row mb-5 sm:mb-0 justify-center' >
                    <TableCell
                        value ={index+1}
                    />

                    <TableCell
                        name="name"
                        type="text"
                        placeholder="Item Name"
                        value ={item.name}
                        editing={item.editing}
                        index={index}
                        updateItem={updateItem}
                    />

                    <TableCell
                        name="brand"
                        type="text"
                        placeholder="Brand"
                        value ={item.brand}
                        editing={item.editing}
                        index={index}
                        updateItem={updateItem}
                    />

                    <TableCell
                        name="category"
                        type="text"
                        placeholder="Category"
                        value ={item.category}
                        editing={item.editing}
                        index={index}
                        updateItem={updateItem}
                    />

                    <TableCell
                        name="model"
                        type="text"
                        placeholder="Model"
                        value ={item.model}
                        editing={item.editing}
                        index={index}
                        updateItem={updateItem}
                    />

                    <TableCell
                        name="purchasePrice"
                        type="number"
                        placeholder="Purchase Price"
                        value ={item.purchasePrice}
                        editing={item.editing}
                        index={index}
                        updateItem={updateItem}
                    />

                    <TableCell
                        name="purchaseDate"
                        type="date"
                        placeholder="date of purchase"
                        value ={item.purchaseDate}
                        editing={item.editing}
                        index={index}
                        updateItem={updateItem}
                    />

                    <TableCell
                        name="quantity"
                        type="number"
                        placeholder="Quantity"
                        value ={item.quantity}
                        editing={item.editing}
                        index={index}
                        updateItem={updateItem}
                    />

                    <TableCell
                        name="supplier"
                        type="text"
                        placeholder="Supplier"
                        value ={item.supplier}
                        editing={item.editing}
                        index={index}
                        updateItem={updateItem}
                    />

                    <TableCell
                        name="serialNumber"
                        type="number"
                        placeholder="Serial Number"
                        value ={item.serialNumber}
                        editing={item.editing}
                        index={index}
                        updateItem={updateItem}
                    />

                    
                    <td className='border-grey-light border hover:bg-gray-100 p-3 pb-[12.75px]'>
                        <div className="flex justify-center gap-1">
                            { !item.editing ?
                                <button 
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded"
                                    onClick={() => {
                                        updateItem(!item.editing, index, "editing")
                                    }} 
                                    >
                                    Edit
                                </button>
                                :
                            
                                <button 
                                    className="bg-orange-500 hover:opacity-60 text-white font-bold px-4 rounded"
                                    onClick={() => updateItem(!item.editing, index, "editing")} 
                                >
                                    save
                                </button>
                            }


                            <button
                                onClick={() => deleteItem(index)}
                                className="bg-red-400 hover:opacity-60 text-white font-bold px-4 rounded">
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
