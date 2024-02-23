export const initialState = {
    stocks: []
}

export const stockReducer = (state, action) => {
    switch (action.type) {
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
        default:
            return state;
    }
}