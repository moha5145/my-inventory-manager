import { createContext, useReducer } from "react";
import { initialState, stockReducer } from './stockReducer';
import { uid } from 'uid';
import axios from "axios";


export const StockContext = createContext();
export const StockProvider = ({children}) => {
    const [stockState, stockDispatch] = useReducer(stockReducer, initialState);
    
    const addStock = (item) => {
        const { category, _id, name, stockType } = item

        const data = {
            id: uid(),
            itemId: _id,
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
        const updatedStocks = stockState.stocks.filter((stock) => stock._id !== item._id);
        stockDispatch({ type: 'UPDATE_STOCKS', payload: updatedStocks })
    };

    const cancelStocks = () => {
        stockDispatch({ type: 'DELETE_STOCKS', payload: [] })
    }

    const confirmStocks = async () => {  
        const stockValToNegativePositive = stockState.stocks.map((stock) => {
            const stockValue = stock.stockType === 'in' ? stock.stock : stock.stock * -1
            return {
                ...stock,
                stock: stockValue
            }
        })

        const response = await axios.post(`${process.env.REACT_APP_API_URL}/stock/create`, {stockItems: stockValToNegativePositive});
        console.log('response.data', response.data)
        stockDispatch({ type: 'UPDATE_STOCKS', payload: stockValToNegativePositive })
        // fetch stock data to database then reset the state

        stockDispatch({ type: 'UPDATE_STOCKS', payload: [] })
    }

    const getStocksByItemId = async (itemId) => {
        try {
            stockDispatch({ type: 'LOADING', payload: true });
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/stocks/${itemId}`);
            stockDispatch({ type: 'GET_STOCKS_BY_ITEM_ID', payload: response.data })
        } catch (error) {
            console.log('error', error)
        } finally {
            stockDispatch({ type: 'LOADING', payload: false });
        }
    }
    
    const value = {
        stockState,
        stockDispatch,
        addStock,
        updateStock,
        deleteStock,
        cancelStocks,
        confirmStocks,
        getStocksByItemId
    }
    return (
        <StockContext.Provider value={value}>
            {children}
        </StockContext.Provider>
    )
}