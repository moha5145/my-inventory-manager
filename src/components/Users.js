import React, { useContext } from 'react';
import { UsersContext } from '../context-and-reducer/users/usersContext';

const Users = () => {
    const { usersState, usersDispatch } = useContext(UsersContext);
    return (
        <div>
            <p>Users</p>

            {usersState.users.map((user, index) => {
                return (
                <div key={index}>
                    <h1>{user.name}</h1>
                </div>
                );
            })}
        </div>
    );
};
export default Users;
