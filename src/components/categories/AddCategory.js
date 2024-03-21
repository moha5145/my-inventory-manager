import React from 'react';
import { MdAdd } from 'react-icons/md';

import IconBtn from '../customButtons/IconBtn';

const AddCategory = ({addCategory, onChange, categoriesState}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        addCategory(categoriesState.newCategory);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-2">
            <input
                type="text" 
                value={categoriesState.newCategory}
                onChange={(e) =>onChange(e.target.value)}
                className="w-full h-9 pl-1 mb-1 md:m-0 border border-gray-400 rounded-lg outline-orange-400"
            />

            <IconBtn
                Icon={MdAdd}
                type="submit"
                bgColor="bg-blue-500"
                textColor="text-white"
                w="w-24"
            />
            </div>
        </form>
    );
};
export default AddCategory;
