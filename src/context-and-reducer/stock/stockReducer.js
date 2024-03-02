export const initialState = {
    stocks: [],
    stocksByItemId: [],
    isLoading: false,
    error: null
}

export const stockReducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
               ...state,
                isLoading:  action.payload
            }
        case 'ADD_STOCK':
            return {
               ...state,
                stocks:  [...state.stocks, action.payload]
            }
        case 'UPDATE_STOCKS':
            return {
                ...state,
                stocks: action.payload
            }
        case 'DELETE_STOCKS':
            return {
                ...state,
                stocks: action.payload
            }
        case 'GET_STOCKS_BY_ITEM_ID':
            return {
                ...state,
                stocksByItemId: action.payload
            }
        default:
            return state;
    }
}