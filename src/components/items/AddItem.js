import React, { useState } from 'react';

import { DateInput, TextInput } from '../../shared/CustomInputs';

const AddItem = ({handleAddItem}) => {
    const [item, setItem] = useState({
        name: '',
        brand: '',
        category: '',
        model: '',
        purchasePrice: '',
        purchaseDate: '',
        quantity: '',
        supplier: '',
        serialNumber: '',
        editing: false, 

    });
    
  return (
    <form className=' w-full' 
        onSubmit={(e) => {
            e.preventDefault()
            handleAddItem(item)
            setItem({
                name: '',
                brand: '',
                category: '',
                model: '',
                purchasePrice: '',
                purchaseDate: '',
                quantity: '',
                supplier: '',
                serialNumber: '',
                editing: false 
            })
        }}
    >
      <p>AddItem</p>
      <div className='md:flex gap-1 border-gray-200 '>
        <TextInput
            placeholder='Name'
            type="text"
            onChange={(e) => setItem({...item, name: e.target.value})}
            value={item.name}
        />

        <TextInput
            placeholder='Brand'
            type="text"
            onChange={(e) => setItem({...item, brand: e.target.value})}
            value={item.brand}
        />

        <TextInput
            placeholder='Category'
            type="text"
            onChange={(e) => setItem({...item, category: e.target.value})}
            value={item.category}
        />

        <TextInput
            placeholder='Model'
            type="text"
            onChange={(e) => setItem({...item, model: e.target.value})}
            value={item.model}
        />

        <TextInput
            placeholder='Purchase $'
            type="number"
            onChange={(e) => setItem({...item, purchasePrice: e.target.value})}
            value={item.purchasePrice}
        />

        <DateInput
            placeholder='Purchase date'
            type="date"
            onChange={(e) => setItem({...item, purchaseDate: e.target.value})}
            value={item.purchaseDate}
        />

        <TextInput
            placeholder='Quantity'
            type="number"
            onChange={(e) => setItem({...item, quantity: e.target.value})}
            value={item.quantity}
        />

        <TextInput
            placeholder='Supplier'
            type="text"
            onChange={(e) => setItem({...item, supplier: e.target.value})}
            value={item.supplier }
        />

        <TextInput
            placeholder='Serial N°'
            type="number"
            onChange={(e) => setItem({...item, serialNumber: e.target.value})}
            value={item.serialNumber}
        />

        <button
            className='bg-orange-500 hover:opacity-50 text-white font-bold px-4 py-2 mt-2 md:m-0 rounded-lg'
        >
            Save
        </button>
      </div>
    </form>
  );
};
export default AddItem;
