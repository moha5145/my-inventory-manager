import React from 'react';
import { UsersProvider } from '../context-and-reducer/users/usersContext';
import Signup from '../components/Signup';

const SignupPage = () => {
  return (
    <section>
      <UsersProvider>
        <p>SignupPage</p>
        <Signup />
      </UsersProvider>
    </section>
  );
};
export default SignupPage;
