import React from 'react';

import { TextInput } from '../../shared/CustomInputs';
import ColoredBtn from '../customButtons/ColoredBtn';
import ColoredLink from '../customLinks/ColoredLink';

const TableCell = ({value, editing = false, index, name, updateItem, type, placeholder}) => {
    return (
        <td className='w-full md:w-52 border-grey-light border hover:bg-gray-100 h-12 pl-1 leading-10'>
            
            <div className=''>
                { editing ? (
                <TextInput
                    type={type}
                    placeholder={placeholder}
                    onChange={(e) => updateItem(e.target.value, index, name)}
                    value={value}
                />
                ) :
                <span className='' >
                    { value }
                </span>
            }
            </div>
        </td>
    )
}

const ItemsTableBody = ({itemsState, updateItem, deleteItem}) => {
  return (
    <tbody className='w-full flex flex-col sm:flex-none'>
        { itemsState.items.map((item, index) => {
            return (       
                <tr key={index} className='h-full flex flex-col flex-no wrap sm:table-row mb-5 sm:mb-0 justify-center' >
                    <td className='w-full md:w-2 border-grey-light border hover:bg-gray-50 h-12 pl-1 leading-10'>
                        {index+1}
                    </td>

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
                        name="Stock"
                        type="number"
                        placeholder="Stock"
                        value ={item.stock}
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
                    
                    <td className='w-full md:w-52 h-12 border-grey-light border hover:bg-gray-100 pb-0'>
                        <div className="flex justify-center gap-1 ">

                            <ColoredLink
                                to={`/item-details/${item.slug} `}
                                state={item}
                                text='Show'
                                bgColor='bg-yellow-400'
                                textColor='text-white'
                            />
                            { !item.editing ?
                                <ColoredBtn
                                    onClick={() => updateItem(!item.editing, index, "editing")}
                                    text='Edit'
                                    bgColor='bg-blue-400'
                                />
                                :      
                                <ColoredBtn
                                    onClick={() => updateItem(!item.editing, index, "editing")}
                                    text='Save'
                                    bgColor='bg-orange-400'
                                />
                            }

                            <ColoredBtn
                                text='Delete'
                                px='px-2'
                                bgColor='bg-red-400'
                                onClick={() => deleteItem(index)}
                            />
                        </div>
                    </td>
                </tr>
            );
        })}
    </tbody>
  );
};
export default ItemsTableBody;
