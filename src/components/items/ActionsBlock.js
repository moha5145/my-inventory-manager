import React from 'react';
import { MdDeleteForever, MdEdit, MdSave, MdRemoveRedEye } from "react-icons/md";

import IconBtn from '../customButtons/IconBtn';
import IconLink from '../customLinks/IconLink';

const ActionsBlock = ({item, updateItem, index, handleSave, deleteItem}) => {
  return (
    <div className="flex justify-center gap-1 w-full ">
        <IconLink
            Icon={MdRemoveRedEye}
            to={`/item-details/${item.slug} `}
            state={item}
            text='Show'
            bgColor='bg-blue-400'
            textColor='text-white'
        />

        { !item.editing ?
            
            <IconBtn
                Icon={MdEdit}
                onClick={() => updateItem(!item.editing, index, "editing")}
                text='Edit'
                bgColor='bg-orange-400'
            />
            :      
            <IconBtn
                Icon={MdSave}
                onClick={() => {
                    handleSave(item, index)
                    // updateItem(!item.editing, index, "editing")
                }}
                text='Save'
                bgColor='bg-green-400'
            />  
        }

        <IconBtn
            Icon={MdDeleteForever}
            onClick={() => deleteItem(item)}
            text='Delete'
            bgColor='bg-red-400'
        />
    </div>
  );
};
export default ActionsBlock;
