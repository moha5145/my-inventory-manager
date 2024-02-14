export const initialState = {
    items: [
        {name: 'chala', brand: "xiaomi", model: 'mi', category: 'phone', quantity: 10, purchasePrice: 1200, serialNumber: '0212343', dateOfPurchase: "05/02/2024", supplier: "tolossa" },
        {name: 'kebede', brand: "xiaomi", model: 'mi', category: 'phone', quantity: 10, purchasePrice: 1200, serialNumber: '0212343', dateOfPurchase: "05/02/2024", supplier: "tolossa" },
        {name: 'chala', brand: "xiaomi", model: 'mi', category: 'phone', quantity: 10, purchasePrice: 1200, serialNumber: '0212343', dateOfPurchase: "05/02/2024", supplier: "tolossa"  },
        {name: 'kebede', brand: "xiaomi", model: 'mi', category: 'phone', quantity: 10, purchasePrice: 1200, serialNumber: '0212343', dateOfPurchase: "05/02/2024", supplier: "tolossa" }
    ]
}

export const itemsReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEMS':
            return {
               ...state,
                items:  [...state.items, action.payload]
            }
        default:
            return state;
    }
}