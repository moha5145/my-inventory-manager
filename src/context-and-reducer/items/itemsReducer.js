export const initialState = {
    items: [
        {   
            id: 1,
            name: 'chala',
            brand: "xiaomi",
            model: 'mi',
            category: 'phone',
            stock: 10,
            newStock: 0,
            purchasePrice: 1200,
            serialNumber: '0212343',
            purchaseDate: "2024-02-25",
            supplier: "tolossa",
            editing: false 
        },
        {   
            id: 2,
            name: 'kebede',
            brand: "xiaomi",
            model: 'mi',
            category: 'phone',
            stock: 10,
            newStock: 0,
            purchasePrice: 1200,
            serialNumber: '0212343',
            purchaseDate: "2024-02-25",
            supplier: "tolossa",
            editing: false 
        },
        {   
            id: 3,
            name: 'chala',
            brand: "xiaomi",
            model: 'mi',
            category: 'phone',
            stock: 10,
            newStock: 0,
            purchasePrice: 1200,
            serialNumber: '0212343',
            purchaseDate: "2024-02-25",
            supplier: "tolossa",
            editing: false 
        },
        {   
            id: 4,
            name: 'kebede',
            brand: "xiaomi",
            model: 'mi',
            category: 'phone',
            stock: 10,
            newStock: 0,
            purchasePrice: 1200,
            serialNumber: '0212343',
            purchaseDate: "2024-02-25",
            supplier: "tolossa",
            editing: false 
        },
        {   
            id: 5,
            name: 'chala',
            brand: "xiaomi",
            model: 'mi',
            category: 'phone',
            stock: 10,
            newStock: 0,
            purchasePrice: 1200,
            serialNumber: '0212343',
            purchaseDate: "2024-02-25",
            supplier: "tolossa",
            editing: false 
        },
        {   
            id: 6,
            name: 'kebede',
            brand: "xiaomi",
            model: 'mi',
            category: 'phone',
            stock: 10,
            newStock: 0,
            purchasePrice: 1200,
            serialNumber: '0212343',
            purchaseDate: "2024-02-25",
            supplier: "tolossa",
            editing: false 
        },
        {   
            id: 7,
            name: 'chala',
            brand: "xiaomi",
            model: 'mi',
            category: 'phone',
            stock: 10,
            newStock: 0,
            purchasePrice: 1200,
            serialNumber: '0212343',
            purchaseDate: "2024-02-25",
            supplier: "tolossa",
            editing: false 
        },
        {   
            id: 8,
            name: 'kebede',
            brand: "xiaomi",
            model: 'mi',
            category: 'phone',
            stock: 10,
            newStock: 0,
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
        case 'UPDATE_TEMPORARY_STOCK':
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}