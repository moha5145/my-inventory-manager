import React from 'react';
import { UsersProvider } from '../context-and-reducer/users/usersContext';
import Login from '../components/Login';

const LoginPage = () => {
  return (
    <div>
      <UsersProvider>
        <p>LoginPage</p>
        <Login />
      </UsersProvider>
    </div>
  );
};
export default LoginPage;
