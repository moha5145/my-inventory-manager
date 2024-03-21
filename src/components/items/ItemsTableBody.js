import React from 'react';
import { Link } from 'react-router-dom';

import { TextInput } from '../../shared/CustomInputs';
import ActionsBlock from './ActionsBlock';
import SelectCategory from './shared/SelectCategory';

const TableCell = ({value, editing = false, index, name, updateItem, type, placeholder}) => {
    return (
        <td className='w-full sm:w-52 border-grey-light border hover:bg-gray-100 h-12 pl-1 leading-10'>
            
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

const ItemsTableBody = ({itemsState, onChangeItem, updateItem, deleteItem, saveUpdate, toggleModal, categoriesState, addCategory, onChangeCategory}) => {

    const handleSave = (item, index) => {
        saveUpdate(item, index)
        updateItem(!item.editing, index, "editing")
    }
  return (
    <tbody className='w-full flex flex-col sm:flex-none sm:inline-table '>
        { itemsState?.items?.map((item, index) => {
            return (       
                <tr key={item._id} className='h-full flex flex-col flex-no-wrap sm:flex-none sm:table-row mb-5 sm:mb-0 justify-center' >
                    <td className='w-full sm:w-2 border-grey-light border hover:bg-gray-50 h-12 pl-1 leading-10'>
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
                    
                    <td className='w-full sm:w-52 border-grey-light border hover:bg-gray-100 h-12 pl-1 leading-10'>
                        { item.editing ? 
                            <SelectCategory
                                item={item}
                                toggleModal={toggleModal}
                                categoriesState={categoriesState}
                                itemsState={itemsState}
                                addCategory={addCategory}
                                onChange={(e) => {
                                    e.target.value === '' ? toggleModal(true) :
                                    updateItem(e.target.value, index, 'category')
                                }}
                                onChangeItem={onChangeItem}
                                onChangeCategory={onChangeCategory}
                            /> 
                            :
                            <span className='' >
                                { item.category }
                            </span>
                        }
                    </td>

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
                        name="serialNumber"
                        type="number"
                        placeholder="Serial Number"
                        value ={item.serialNumber}
                        editing={item.editing}
                        index={index}
                        updateItem={updateItem}
                    />
                    

                    <td className=' w-full sm:w-52 border-grey-light border hover:bg-gray-50 h-12 pl-1 leading-10'>
                        <div className='flex flex-col h-12'>
                            <span className='h-full text-xs pb-0'>
                                {item.stock}
                            </span>
                            <span className='h-full flex py-1 gap-1'>
                                <Link to='/stock-in' className='flex-1 py-0 px-1 rounded-sm text-xs bg-green-400 text-white hover:opacity-60'>in</Link>
                                <Link to='/stock-out' className='flex-1 py-0 px-1 rounded-sm text-xs bg-red-400 text-white hover:opacity-60'>out</Link>
                            </span>
                        </div>
                    </td>
                    <td className='w-full sm:w-52 h-12 border-grey-light border pb-0'>
                        <div className="flex justify-center gap-1 ">

                           <ActionsBlock
                                item={item}
                                updateItem={updateItem}
                                index={index}
                                handleSave={handleSave} 
                                deleteItem={deleteItem}
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
