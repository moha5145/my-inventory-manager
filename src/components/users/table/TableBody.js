import React from 'react';
import TableActions from './TableActions';
import { SelectInput, TextInput } from '../../../shared/CustomInputs';

const TableCell = ({editing, value, onChange}) => {
    return (
        <td className='border-grey-light border hover:bg-gray-100 h-12 pl-1 leading-10'>
            { editing ? <TextInput value={value} onChange={onChange}/>
                : <span> {value} </span>
            }
        </td>
    )
}

const TableBody = ({item, index, deleteUser, updateUser}) => {
  return (
    <tr key={index} className='flex flex-col flex-no wrap sm:table-row mb-5 sm:mb-0 justify-center' >
        
        <td className='border-grey-light border hover:bg-gray-100 h-12 pl-1 leading-10'>
            { index + 1 }
        </td>
        <TableCell value={item.firstName} editing={item.editing} onChange={(e) => updateUser(index, 'firstName', e.target.value)}/>
        
        <TableCell value={item.lastName} editing={item.editing} onChange={(e) => updateUser(index, 'lastName', e.target.value)}/>

        <TableCell value={item.username} editing={item.editing} onChange={(e) => updateUser(index, 'username', e.target.value)}/>
        
        <TableCell value={item.email} editing={item.editing} onChange={(e) => updateUser(index, 'email', e.target.value)}/>

        <td className='border-grey-light border hover:bg-gray-100 h-12 pl-1 leading-10'>            

            {item.editing ? <SelectInput
                onChange={(e) => {
                    updateUser(index, 'role', e.target.value)}
                }
                value={item.role}
                name="role"
                options={[
                    {label: 'Select Role', value: ''},
                    {label: 'Admin', value: 'Admin'},
                    {label: 'Manager', value: 'Manger'},
                    {label: 'Salesperson', value: 'Salesperson'},
                ]}
            /> :  item.role }
        </td>

        <td className='border-grey-light border hover:bg-gray-100 h-12 pl-1 leading-10'>
            {item.editing ? <SelectInput
                onChange={(e) => {
                    updateUser(index, 'status', e.target.value)}
                }
                value={item.status}
                name="status"
                options={[
                    {label: 'Select Status', value: ''},
                    {label: 'Active', value: 'Active'},
                    {label: 'Inactive', value: 'Inactive'},
                ]}
            /> :  item.status }
        </td>

        
        <td className='border-grey-light border hover:bg-gray-100  pb-0'>
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
