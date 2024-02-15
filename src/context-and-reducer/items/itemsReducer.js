export const initialState = {
    items: [
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

export const itemsReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
               ...state,
                items:  [action.payload, ...state.items]
            }
        case 'UPDATE_ITEMS':
            return {
                ...state,
                items: action.payload
            }
        case 'DELETE_ITEMS':
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}