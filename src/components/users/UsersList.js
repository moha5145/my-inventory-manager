import React from 'react';
import TableHeader from './table/TableHader';
import TableBody from './table/TableBody';

const UsersList = ({usersState, deleteUser, updateUser}) => {
    return (
        <div className='w-full overflow-x-auto '>

            <table className="table-fixed h-full sm:inline-block w-full flex flex-row flex-no-wrap bg-gray-100 rounded-lg  sm:shadow-lg my-5 px-2">
                <thead className="text-white sm:[&>*:not(:first-child)]:hidden w-full">
                    { usersState.users.map((_, index) => {
                        return (   
                            <TableHeader key={index} />
                        )})
                    }
                </thead>
                
                <tbody className='flex-1 sm:flex-none w-full'>
                    { usersState.users.map((item, index) => {
                        return (       
                            <TableBody
                                item={item}
                                index={index}
                                deleteUser={deleteUser}
                                updateUser={updateUser}
                            />
                        );
                    })}
                </tbody>
            </table> 
                    
        </div>
    );
};
export default UsersList;
