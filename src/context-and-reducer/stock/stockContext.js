import { createContext, useReducer } from "react";
import { initialState, stockReducer } from './stockReducer';


export const StockContext = createContext();
export const StockProvider = ({children}) => {
    const [stockState, stockDispatch] = useReducer(stockReducer, initialState);
    
    const value = {
        stockState,
        stockDispatch
    }
    return (
        <StockContext.Provider value={value}>
            {children}
        </StockContext.Provider>
    )
}