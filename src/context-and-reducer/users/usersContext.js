import { createContext, useReducer } from "react";
import { initialState, usersReducer } from './usersReducer';

export const UsersContext = createContext();

export const UsersProvider = ({children}) => {
    const [usersState, usersDispatch] = useReducer(usersReducer, initialState);

    const addUser = (user) => {
        usersDispatch({
            type: 'ADD_USERS',
            payload: user
        })
    }

    const updateUser = (index, name, value) => {
        const updatedUsers = [...usersState.users];
        updatedUsers[index][name] = value;
        usersDispatch({
            type: 'UPDATE_USERS',
            payload: updatedUsers
        })
    }

    const deleteUser = (id) => {
        const updatedUsers = usersState.users.filter((user) => user._id !== id)
        usersDispatch({
            type: 'DELETE_USERS',
            payload: updatedUsers
        })
    }

    const value = {
        usersState,
        usersDispatch,
        addUser,
        updateUser,
        deleteUser
    }

    return (   
        <UsersContext.Provider value={value}>
            {children}
        </UsersContext.Provider>
    );
}