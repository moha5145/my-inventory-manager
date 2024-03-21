import React from 'react';
import { MdDeleteForever, MdEdit, MdSave, MdRemoveRedEye } from "react-icons/md";

import IconBtn from '../customButtons/IconBtn';
import IconLink from '../customLinks/IconLink';

const ActionsBlock = ({item, updateItem, index, handleSave, deleteItem}) => {
  return (
    <div className="flex justify-center gap-1 w-full hover:bg-white">
        <IconLink
            Icon={MdRemoveRedEye}
            to={`/item-details/${item.slug} `}
            state={item}
            text='Show'
            bgColor='bg-transparent'
            borderColor='border-blue-400'
            textColor='text-blue-400'
        />

        { !item.editing ?
            <IconBtn
                Icon={MdEdit}
                onClick={() => updateItem(!item.editing, index, "editing")}
                text='Edit'
                textColor='text-orange-400'
                borderColor='border-orange-400'
                bgColor='bg-transparent'
            />
            :      
            <IconBtn
                Icon={MdSave}
                onClick={() => {
                    handleSave(item, index)
                    // updateItem(!item.editing, index, "editing")
                }}
                text='Save'
                bgColor='bg-transparent-400'
                textColor='text-green-400'
                borderColor='border-green-400'
            />  
        }

        <IconBtn
            Icon={MdDeleteForever}
            onClick={() => deleteItem(item)}
            text='Delete'
            bgColor='bg-transparent-400'
            textColor='text-red-400'
            borderColor='border-red-400'
        />
    </div>
  );
};
export default ActionsBlock;
