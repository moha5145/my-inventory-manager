import React, { useState } from 'react';
import slugify from 'slugify';

import { DateInput, TextInput } from '../../../shared/CustomInputs';
import { useNavigate } from 'react-router-dom';
import OutlineBtn from '../../customButtons/OutlineBtn';
import ColoredBtn from '../../customButtons/ColoredBtn';

const AddItem = ({handleAddItem, flexType = 'col'}) => {

    const navigate = useNavigate();

    const [item, setItem] = useState({
        name: '',
        slug:'',
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
                slug:'',
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
      <p className='text-2xl mb-3'>AddItem</p>
      <div className={`flex flex-${flexType} gap-2 sm:gap-1 border-gray-200 `}>
        <TextInput
            placeholder='Name'
            type="text"
            onChange={(e) => setItem({...item, name: e.target.value, slug: slugify(e.target.value, {lower: true})})}
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

        <div className='flex gap-2'>
            <div className='md:hidden w-full'>

                <OutlineBtn
                    text='Return'
                    onClick={() => navigate(-1)}
                    bgColor='bg-white-500'
                    textColor='text-gray-500'
                    w='full'
                />
            </div>

            <ColoredBtn
                text="Save"
            />
        </div>
      </div>
    </form>
  );
};
export default AddItem;
