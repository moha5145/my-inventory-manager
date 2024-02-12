import React from 'react';
import { UsersProvider } from '../context-and-reducer/users/usersContext';
import Signin from '../components/Signin';

const SigninPage = () => {
  return (
    <div>
      <UsersProvider>
        <p>SigninPage</p>
        <Signin />
      </UsersProvider>
    </div>
  );
};
export default SigninPage;
