import { createContext, useReducer } from "react";
import { initialState, suppliersReducer } from './supplierReducer';

export const SuppliersContext = createContext();

export const SuppliersProvider = ({children}) => {
    const [suppliersState, suppliersDispatch] = useReducer(suppliersReducer, initialState);

    const value = {
        suppliersState,
        suppliersDispatch
    }

    return (   
        <SuppliersContext.Provider value={value}>
            {children}
        </SuppliersContext.Provider>
    );
}