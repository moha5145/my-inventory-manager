import React, { useState } from 'react';
import { TextInput } from '../../shared/CustomInputs';

const AddSupplier = ({ addSupplier }) => {

    const [formData, setFormData] = useState({
        name: '',
        contactPerson: '',
        address: '',
        phone: '',
        email: '',
        website: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addSupplier(formData);
        setFormData({
        name: '',
        contactPerson: '',
        address: '',
        phone: '',
        email: '',
        website: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 grid gap-2 sm:grid-cols-2 bg-gray-100 p-4">

        <div className='w-full sm:col-span-2 border rounded-md'>
            <TextInput
                type="text"
                name="name"
                placeholder="Supplier Name"
                value={formData.name}
                onChange={handleChange}
            />
        </div>

        <TextInput
            type="text"
            name="contactPerson"
            placeholder="Contact Person"
            value={formData.contactPerson}
            onChange={handleChange}
        />
        
        <TextInput
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
        />
        
        <TextInput
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
        />

        <TextInput
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
        />
        
        <TextInput
            type="text"
            name="website"
            placeholder="Website"
            value={formData.website}
            onChange={handleChange}
        />
        
        <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
            Add Supplier
        </button>
      </form>
  );
};
export default AddSupplier;
