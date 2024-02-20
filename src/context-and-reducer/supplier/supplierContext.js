import { createContext, useReducer } from "react";
import { initialState, suppliersReducer } from './supplierReducer';
export const SuppliersContext = createContext();

export const SuppliersProvider = ({children}) => {
    const [suppliersState, suppliersDispatch] = useReducer(suppliersReducer, initialState);

    const addSupplier = (suppliers) => {
        suppliersDispatch({ type: 'ADD_SUPPLIER', payload: suppliers });
    }

    const updateSupplier = (index, name, value) => {
        const updatedSuppliers = [...suppliersState.suppliers];
        updatedSuppliers[index][name] = value;
        suppliersDispatch({ type: 'UPDATE_SUPPLIER', payload: updatedSuppliers });
    }
    
    const deleteSupplier = (id) => {
        const updatedSuppliers = suppliersState.suppliers.filter((supplier) => supplier.id !== id);
        suppliersDispatch({ type: 'DELETE_SUPPLIER', payload: updatedSuppliers });
    }

    const value = {
        suppliersState,
        suppliersDispatch,
        addSupplier,
        deleteSupplier,
        updateSupplier
    }

    return (   
        <SuppliersContext.Provider value={value}>
            {children}
        </SuppliersContext.Provider>
    );
}