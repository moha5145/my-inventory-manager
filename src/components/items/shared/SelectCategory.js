import React from 'react';

import SimpleModal from '../../custom/SimpleModal';
import { TextInput } from '../../../shared/CustomInputs';

const SelectCategory = ({item, onChange, toggleModal, categoriesState, itemsState, addCategory, onChangeCategory}) => {
 
    return (
        <>
            <select
                name="categories"
                id=""
                value={item.category}
                onChange={onChange}
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
                    value={categoriesState.newCategory}
                />
            </SimpleModal>
        </>
    );
};
export default SelectCategory;
