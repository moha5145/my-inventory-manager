import React from 'react';
import { TextInput } from '../../shared/CustomInputs';

const SuppliersList = ({currentSuppliers, deleteSupplier, updateSupplier}) => {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
        {currentSuppliers.map((supplier, index) => (
            <li key={supplier.id} className="border-b border-gray-200 py-4 ">
                {supplier.editing ? (
                    <div className='mb-1'>
                        <TextInput
                            value={supplier.name}
                            onChange={(e) => {updateSupplier(index, 'name', e.target.value)}}
                        />
                    </div> )
                    : <p className="font-semibold">{supplier.name}</p>
                }

                {supplier.editing ? (
                    <div className='mb-1'>
                        <TextInput
                            value={supplier.contactPerson}
                            onChange={(e) => {updateSupplier(index, 'contactPerson', e.target.value)}}
                        />
                    </div> )
                    : <p>Contact: {supplier.contactPerson}</p>
                }
                
                {supplier.editing ? (
                    <div className='mb-1'>
                        <TextInput
                            value={supplier.address}
                            onChange={(e) => {updateSupplier(index, 'address', e.target.value)}}
                        />
                    </div> )
                    : <p>{supplier.address}</p>
                }
                
                {supplier.editing ? (
                    <div className='mb-1'>
                        <TextInput
                            value={supplier.phone}
                            onChange={(e) => {updateSupplier(index, 'phone', e.target.value)}}

                        />
                    </div> )
                    : <p>Phone: {supplier.phone}</p>
                }
                
                {supplier.editing ? (
                    <div className='mb-1'>
                        <TextInput
                            value={supplier.email}
                            onChange={(e) => {updateSupplier(index, 'email', e.target.value)}}
                        />
                    </div> )
                    : <p>Email: {supplier.email}</p>
                }
                
                {supplier.editing ? (
                    <div className="mb-1">
                        <TextInput
                        value={supplier.website}
                        onChange={(e) => {updateSupplier(index, 'website', e.target.value)}}
                    />
                    </div> )
                    : <p>Website: <a href={supplier.website} className="text-blue-500 hover:underline">{supplier.website}</a></p>
                }
                
                <div className='flex gap-2'>
                    <button
                        onClick={() => updateSupplier(index, 'editing', !supplier.editing)}
                        className={`w-full mt-2 px-4 py-2 ${supplier.editing ? 'bg-green-400 hover:bg-green-300' : 'bg-blue-400 hover:bg-blue-300'} text-white rounded-md `}
                    >
                        {supplier.editing ? 'Save' : 'Edit'}
                    </button>                

                    <button
                        onClick={() => deleteSupplier(supplier.id)}
                        className="w-full mt-2 px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-300"
                    >
                        Delete
                    </button>
                </div>
            </li>
        ))}
    </ul>
  );
};
export default SuppliersList;
