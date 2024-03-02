import React, { useState } from 'react';
import slugify from 'slugify';

import { SelectInput, TextInput } from '../../../shared/CustomInputs';
import { useNavigate } from 'react-router-dom';
import OutlineBtn from '../../customButtons/OutlineBtn';
import ColoredBtn from '../../customButtons/ColoredBtn';

const AddItem = ({handleAddItem, flexType = 'col', categoriesState}) => {

    const navigate = useNavigate();

    const [item, setItem] = useState({
        name: '',
        slug:'',
        brand: '',
        category: '',
        model: '',
        stock: 0,
        newStock: 0,
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
                stock: 0,
                newStock: 0,
                serialNumber: '',
                editing: false 
            })
        }}
    >
      <p className='text-2xl mb-3'>AddItem</p>
      <div className={`flex flex-${flexType} w-full gap-2 sm:gap-1 border-gray-200 `}>
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

        {/* <TextInput
            placeholder='Category'
            type="text"
            onChange={(e) => setItem({...item, category: e.target.value})}
            value={item.category}
        /> */}
        <SelectInput
            name='categories'
            onChange={(e) => setItem({...item, category: e.target.value})}
            value={item.category}
            options={categoriesState.categories}
        />

        <select
            name="categories"
            id=""
            value={item.category || 'category'}
            onChange={(e) => setItem({...item, category: e.target.value})}
            className='w-full border-2 bg-white outline-orange-400 rounded-md p-2'
        >
            <option value="">Select a category</option>

                <TextInput
                    placeholder='Category'
                    type="text"
                    onChange={(e) => setItem({...item, category: e.target.value})}
                    value={item.category}
                />
            {categoriesState.categories.map((category ) => {
                return <option value={category.value}>{category.label}</option>
            })}
            <button >Add Category</button>
        </select>

        <TextInput
            placeholder='Model'
            type="text"
            onChange={(e) => setItem({...item, model: e.target.value})}
            value={item.model}
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
