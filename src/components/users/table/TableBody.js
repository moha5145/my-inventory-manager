import React from 'react';

import TableActions from './TableActions';
import { SelectInput, TextInput } from '../../../shared/CustomInputs';

const TableCell = ({editing, value, onChange}) => {
    return (
        <td className='w-full border-grey-light border hover:bg-gray-100 h-12 pl-1 leading-10'>
            { editing ? <TextInput
                    value={value}
                    onChange={onChange}
                />
                : <span> {value} </span>
            }
        </td>
    )
}

const SelectCell = ({editing, value, onChange, options, name}) => {
    return (
        <td className='w-full border-grey-light border hover:bg-gray-100 h-12 pl-1 leading-10'>
            {editing ? <SelectInput
                    onChange={onChange}
                    value={value}
                    name={name}
                    options={options}
                />
                : 
                value 
            }
        </td>
    )
}

const TableBody = ({item, index, deleteUser, updateUser}) => {
  return (
    <tr key={index} className='w-full flex flex-col flex-no wrap sm:table-row mb-5 sm:mb-0 justify-center' >
        
        <td className='w-full border-grey-light border hover:bg-gray-100 h-12 pl-1 leading-10'>
            { index + 1 }
        </td>
        <TableCell value={item.firstName} editing={item.editing} onChange={(e) => updateUser(index, 'firstName', e.target.value)}/>
        
        <TableCell value={item.lastName} editing={item.editing} onChange={(e) => updateUser(index, 'lastName', e.target.value)}/>

        <TableCell value={item.username} editing={item.editing} onChange={(e) => updateUser(index, 'username', e.target.value)}/>
        
        <TableCell value={item.email} editing={item.editing} onChange={(e) => updateUser(index, 'email', e.target.value)}/>

        <SelectCell
            editing={item.editing}
            value={item.role}
            name="role"
            onChange={(e) => updateUser(index, 'role', e.target.value)}
            options={[
                {label: 'Select Role', value: ''},
                {label: 'Admin', value: 'Admin'},
                {label: 'Manager', value: 'Manger'},
                {label: 'Salesperson', value: 'Salesperson'},
            ]}
        />
        
        <SelectCell
            editing={item.editing}
            value={item.status}
            name="status"
            onChange={(e) => updateUser(index, 'status', e.target.value)}
            options={[
                {label: 'Select Status', value: ''},
                {label: 'Active', value: 'Active'},
                {label: 'Inactive', value: 'Inactive'},
            ]}
        />

        <td className='w-full border-grey-light border hover:bg-gray-100  pb-0'>
            <TableActions
                item={item}
                deleteUser={deleteUser}
                updateUser={updateUser}
                index={index}
            />
        </td>
    </tr>
  );
};
export default TableBody;
