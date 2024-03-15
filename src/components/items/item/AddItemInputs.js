import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import slugify from 'slugify';

import { TextInput } from '../../../shared/CustomInputs';
import OutlineBtn from '../../customButtons/OutlineBtn';
import ColoredBtn from '../../customButtons/ColoredBtn';
import SimpleModal from '../../custom/SimpleModal';

const AddItem = ({handleAddItem, flexType = 'col', categoriesState, toggleModal, itemsState, onChangeCategory, addCategory}) => {

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
    
    const selectChangeHandler = (e) => {
        if (e.target.value === '') {
            toggleModal(true)
        }
        setItem({ ...item, category: e.target.value })
    }  

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
            defaultValue={item.name}
        />

        <TextInput
            placeholder='Brand'
            type="text"
            onChange={(e) => setItem({...item, brand: e.target.value})}
            defaultValue={item.brand}
        />

        <select
            name="categories"
            id=""
            value={item.category || 'category'}
            onChange={selectChangeHandler}
            className='w-full border-2 bg-white outline-orange-400 rounded-md p-2'
        >
            <option value="">Select a category</option>
            {categoriesState.categories.map((category) => {
                return <option value={category.value}>{category.label}</option>
            })}
        
            <option value="" className='text-xl text-emerald-500 font-bold text-center cursor-pointer py-2 h-16'>
                <span className=' h-20 cursor-pointer py-2'>
                + Add new
                </span>
            </option>
        </select>

        <SimpleModal
            state={itemsState}
            toggleModal={toggleModal}
            modalTitle="Add Category"
            cancelBtnText="Cancel"
            confirmBtnText="Add"
            onAdd={() => {
                addCategory(categoriesState.newCategory)
                toggleModal(false)
            }}
            onCancel={() => toggleModal(false)}
        >
            <TextInput 
                placeholder='Category Name'
                type="text"
                onChange={(e) => {
                    onChangeCategory( e.target.value )
                }}
                defaultValue={categoriesState.newCategory.label}
            />

        </SimpleModal>

        <TextInput
            placeholder='Model'
            type="text"
            onChange={(e) => setItem({...item, model: e.target.value})}
            defaultValue={item.model}
        />    

        <TextInput
            placeholder='Serial N°'
            type="number"
            onChange={(e) => setItem({...item, serialNumber: e.target.value})}
            defaultValue={item.serialNumber}
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
