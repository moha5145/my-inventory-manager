import React from 'react';

const TableActions = ({item, deleteUser, updateUser, index}) => {
    return (
        <div className="flex justify-center gap-1 h-12">
                    
            {/* <button 
                onClick={() => {
                    const status = item.status === 'Active' ? 'Inactive' : 'Active';
                    updateUser(index, 'status', status)
                }} 
                className="bg-orange-400 hover:opacity-60 text-white font-bold p-3 px-4 rounded-md"
                style={item.status === 'Active' ? {backgroundColor: '#66c08a'} : {backgroundColor: '#ff8138'}}    
            >
                Status
            </button> */}

            <button 
                onClick={() => {
                    updateUser(index, 'editing', !item.editing)
                }} 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 px-4 rounded-md"
                style={item.editing ? {backgroundColor: '#ff8138'} : {backgroundColor: '#3b82f6'}}
            >   
                {item.editing ? 'save' : 'Edit'}
            </button>
                

            <button
                onClick={() => {
                    deleteUser(item._id)
                }}
                className="bg-red-400 hover:opacity-60 text-white font-bold px-4 rounded-md">
                Delete
            </button>
        </div>
    );
};
export default TableActions;
