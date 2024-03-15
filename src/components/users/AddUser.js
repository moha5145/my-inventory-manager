import React, { useState } from 'react';

import { SelectInput, TextInput } from '../../shared/CustomInputs';

const AddUser = ({addUser}) => {

    const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    status: '',
    editing: false
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(formData);
    setFormData({
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      role: '',
      status: '',
      editing: false
    });
  };
  return (
    <form onSubmit={handleSubmit} className="mb-4">
        <div className="grid grid-cols-2 gap-4">
            <TextInput 
                type="text"
                placeholder="Username"
                onChange={handleChange}
                defaultValue={formData.username}
                name="username"
            />

            <TextInput 
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                defaultValue={formData.firstName}
                name="firstName"
            />

            <TextInput 
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                defaultValue={formData.lastName}
                name="lastName"
            />  

            <TextInput 
                type="email"
                placeholder="Email"
                onChange={handleChange}
                defaultValue={formData.email}
                name="email"
            />          
    
        
            <SelectInput
                onChange={handleChange}
                defaultValue={formData.role}
                name="role"
                options={[
                    {label: 'Select Role', value: ''},
                    {label: 'Admin', value: 'admin'},
                    {label: 'Manager', value: 'manager'},
                    {label: 'Salesperson', value: 'salesperson'},
                ]}
            />
            <SelectInput
                onChange={handleChange}
                value={formData.status}
                name="status"
                options={[
                    {label: 'Select Status', value: ''},
                    {label: 'Active', value: 'active'},
                    {label: 'Inactive', value: 'inactive'},
                ]}
            />
        </div>
        <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
            Add User
        </button>
      </form>
  );
};
export default AddUser;
