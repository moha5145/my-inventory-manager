import React, { useContext } from 'react';
import { UsersContext } from '../../context-and-reducer/users/usersContext';

import AddUser from './AddUser';
import UsersList from './UsersList';

const Users = () => {
    const { usersState, addUser, deleteUser, updateUser } = useContext(UsersContext);

    return (
        <div className='w-full'>
            <div className='flex flex-wrap w-full gap-10'>
                <div className='md:w-1/3 p-2 bg-gray-100 rounded-md'>
                    chala
                {/* <Test /> */}
                Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. 
                Repellendus perspiciatis et eligendi 
                consequatur vitae saepe repellat debitis. 
                Obcaecati natus nulla mollitia dolore 
                temporibus et ab, esse sequi, odio laborum placeat!
                </div>

                <div className='flex-1 p-2 bg-gray-100 rounded-md'>
                    <AddUser addUser={addUser}/>
                </div>
            </div>

            <div className='bg-gray-100 my-8 px-2 w-full'>

                <UsersList
                    usersState={usersState}
                    deleteUser={deleteUser}
                    updateUser={updateUser}
                />
            </div>
        </div>
    );
};
export default Users;
