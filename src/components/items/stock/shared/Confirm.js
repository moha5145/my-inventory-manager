import React from 'react';

const Confirm = ({updateItem, setNewItems}) => {
  return (
    <div className='flex justify-evenly gap-2'>
        <button onClick={updateItem} className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-md">
            Confirm
        </button>

        <button onClick={() => setNewItems([])} className="flex-1 px-4 py-2 bg-red-500 text-white rounded-md">
            Clear
        </button>
    </div>
  );
};
export default Confirm;
