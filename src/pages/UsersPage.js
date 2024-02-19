import React from 'react';
import { UsersProvider } from '../context-and-reducer/users/usersContext';
import Users from '../components/users/Users';

const UsersPage = () => {
  return (
    <section>
        <UsersProvider>
            <p>Users</p>
            <Users />
        </UsersProvider>
    </section>
  );
};
export default UsersPage;
