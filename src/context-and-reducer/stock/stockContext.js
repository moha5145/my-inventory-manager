import { createContext, useReducer } from "react";
import { initialState, stockReducer } from './stockReducer';
import { uid } from 'uid';


export const StockContext = createContext();
export const StockProvider = ({children}) => {
    const [stockState, stockDispatch] = useReducer(stockReducer, initialState);
    
    const addStock = (item) => {
        const { category, id, name, stockType } = item

        const data = {
            id: uid(),
            itemId: id,
            name,
            stock: 1,
            category,
            editing: false,
            purchaseDate: '',
            purchasePrice: 0,
            salePrice: 0,
            stockType,
            supplier: '',
            note: ''
        }
        stockDispatch({ type: 'ADD_STOCK', payload: data })
    };

    const updateStock = (name, index, value) => {
        const updatedItems = [...stockState.stocks];
        updatedItems[index][name] = value;
        stockDispatch({ type: 'UPDATE_STOCKS', payload: updatedItems })
    }

    const deleteStock = (item) => {
        const updatedStocks = stockState.stocks.filter((stock) => stock.id !== item.id);
        stockDispatch({ type: 'UPDATE_STOCKS', payload: updatedStocks })
    };

    const cancelStocks = () => {
        stockDispatch({ type: 'DELETE_STOCKS', payload: [] })
    }

    const confirmStocks = () => {  
        const stockValToNegativePositive = stockState.stocks.map((stock) => {
            const stockValue = stock.stockType === 'in' ? stock.stock : stock.stock * -1
            return {
                ...stock,
                stock: stockValue
            }
        })
        stockDispatch({ type: 'UPDATE_STOCKS', payload: stockValToNegativePositive })
        // fetch stock data to database then reset the state

        console.log('stockValToNegativePositive', stockValToNegativePositive)
        stockDispatch({ type: 'UPDATE_STOCKS', payload: [] })
    }
    
    const value = {
        stockState,
        stockDispatch,
        addStock,
        updateStock,
        deleteStock,
        cancelStocks,
        confirmStocks
    }
    return (
        <StockContext.Provider value={value}>
            {children}
        </StockContext.Provider>
    )
}