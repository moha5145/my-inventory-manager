import React, { useContext } from 'react';
import { UsersContext } from '../context-and-reducer/users/usersContext';

const Login = () => {
    const { usersState } = useContext(UsersContext);
    return (
      <section>
        <p>Login</p>
        {usersState.users.map((user, index) => {
          return (
            <div key={index}>
              <h1>{user.name}</h1>
            </div>
          );
        })}
      </section>
    );
};
export default Login;
