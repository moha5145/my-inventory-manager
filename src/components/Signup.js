import React, { useContext } from 'react';
import { UsersContext } from '../context-and-reducer/users/usersContext';

const Signup = () => {
    const { usersState, usersDispatch } = useContext(UsersContext);
    return (
      <section>
        <p>Signup</p>
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
export default Signup;
