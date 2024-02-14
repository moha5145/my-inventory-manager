import { createContext, useReducer } from "react";
import { initialState, itemsReducer } from './itemsReducer';

export const ItemsContext = createContext();

export const ItemsProvider = ({children}) => {
    const [itemsState, itemsDispatch] = useReducer(itemsReducer, initialState);

    const value = {
        itemsState,
        itemsDispatch
    }

    return (   
        <ItemsContext.Provider value={value}>
            {children}
        </ItemsContext.Provider>
    );
}