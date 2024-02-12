import React, { useContext } from 'react';
import { UsersContext } from '../context-and-reducer/users/usersContext';

const Signin = () => {
    const { usersState, usersDispatch } = useContext(UsersContext);
    return (
      <section>
        <p>Signin</p>
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
export default Signin;
