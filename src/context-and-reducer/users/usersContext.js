import { createContext, useReducer } from "react";
import { initialState, usersReducer } from './usesrsReducer';

export const UsersContext = createContext();

export const UsersProvider = ({children}) => {
    const [usersState, usersDispatch] = useReducer(usersReducer, initialState);

    const value = {
        usersState,
        usersDispatch
    }

    return (   
        <UsersContext.Provider value={value}>
            {children}
        </UsersContext.Provider>
    );
}