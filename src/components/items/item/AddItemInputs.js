import React from 'react';
import { useNavigate } from 'react-router-dom';

import { TextInput } from '../../../shared/CustomInputs';
import OutlineBtn from '../../customButtons/OutlineBtn';
import ColoredBtn from '../../customButtons/ColoredBtn';
import SelectCategory from '../shared/SelectCategory';

const AddItem = ({handleAddItem, flexType = 'col', categoriesState, toggleModal, itemsState, onChangeItem, onChangeCategory, addCategory}) => {

    const navigate = useNavigate();
    
   const onChange = (e) => {
        if (e.target.value === '') {
            toggleModal(true)
        }
        onChangeItem( 'category', e.target.value)
    }

  return (
    <form className=' w-full' 
        onSubmit={ (e) => {
            e.preventDefault()
             handleAddItem(itemsState.item)
        }}
    >
      <p className='text-2xl mb-3'>AddItem</p>
      <div className={`flex flex-${flexType} w-full gap-2 sm:gap-1 border-gray-200 `}>
        <TextInput
            placeholder='Name'
            type="text"
            name='name'
            onChange={ (e) => {
                onChangeItem( 'name', e.target.value)
            }}
            value={itemsState.item.name}
        />

        <TextInput
            placeholder='Brand'
            type="text"
            name='brand'
            onChange={(e) => {
                onChangeItem( 'brand', e.target.value);
            }}
            value={itemsState.item.brand}
        />

        <SelectCategory
            item={itemsState.item}
            onChangeItem={onChangeItem}
            toggleModal={toggleModal}
            categoriesState={categoriesState}
            itemsState={itemsState}
            addCategory={addCategory}
            onChangeCategory={onChangeCategory}
            onChange={(e) => {
                onChange(e)
            }}
        />

        <TextInput
            placeholder='Model'
            type="text"
            name='model'
            onChange={(e) => {
                onChangeItem( 'model', e.target.value)
            }}
            value={itemsState.item.model}
        />    

        <TextInput
            placeholder='Serial N°'
            type="number"
            name='serialNumber'
            onChange={(e) => {
                onChangeItem('serialNumber', e.target.value)
            }}
            value={itemsState.item.serialNumber}
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
