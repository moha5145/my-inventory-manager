export const initialState = {
    stocks: [
        {
            name: 'chala',
            brand: "xiaomi",
            model: 'mi',
            category: 'phone',
            quantity: 10,
            purchasePrice: 1200,
            serialNumber: '0212343',
            purchaseDate: "2024-02-25",
            supplier: "tolossa",
            editing: false 
        },
        {
            name: 'kebede',
            brand: "xiaomi",
            model: 'mi',
            category: 'phone',
            quantity: 10,
            purchasePrice: 1200,
            serialNumber: '0212343',
            purchaseDate: "2024-02-25",
            supplier: "tolossa",
            editing: false 
        },
        {
            name: 'chala',
            brand: "xiaomi",
            model: 'mi',
            category: 'phone',
            quantity: 10,
            purchasePrice: 1200,
            serialNumber: '0212343',
            purchaseDate: "2024-02-25",
            supplier: "tolossa",
            editing: false 
        },
        {
            name: 'kebede',
            brand: "xiaomi",
            model: 'mi',
            category: 'phone',
            quantity: 10,
            purchasePrice: 1200,
            serialNumber: '0212343',
            purchaseDate: "2024-02-25",
            supplier: "tolossa",
            editing: false 
        }
    ]
}

export const stockReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
               ...state,
                stocks:  [action.payload, ...state.stocks]
            }
        case 'UPDATE_ITEMS':
            return {
                ...state,
                stocks: action.payload
            }
        case 'DELETE_ITEMS':
            return {
                ...state,
                stocks: action.payload
            }
        default:
            return state;
    }
}