export const initialState = {
    suppliers: [
        { id: 1, name: 'Apple', contactPerson: 'John Doe', address: '123 Main St, City', phone: '123-456-7890', email: 'contact@apple.com', website: 'www.apple.com', editing: false },
        { id: 2, name: 'Samsung', contactPerson: 'Jane Smith', address: '456 Elm St, Town', phone: '987-654-3210', email: 'contact@samsung.com', website: 'www.samsung.com', editing: false },
        { id: 3, name: 'Apple', contactPerson: 'John Doe', address: '123 Main St, City', phone: '123-456-7890', email: 'contact@apple.com', website: 'www.apple.com', editing: false },
        { id: 4, name: 'Samsung', contactPerson: 'Jane Smith', address: '456 Elm St, Town', phone: '987-654-3210', email: 'contact@samsung.com', website: 'www.samsung.com', editing: false },
        { id: 5, name: 'Apple', contactPerson: 'John Doe', address: '123 Main St, City', phone: '123-456-7890', email: 'contact@apple.com', website: 'www.apple.com', editing: false },
        { id: 6, name: 'Samsung', contactPerson: 'Jane Smith', address: '456 Elm St, Town', phone: '987-654-3210', email: 'contact@samsung.com', website: 'www.samsung.com', editing: false },
        { id: 7, name: 'Apple', contactPerson: 'John Doe', address: '123 Main St, City', phone: '123-456-7890', email: 'contact@apple.com', website: 'www.apple.com', editing: false },
        { id: 8, name: 'Samsung', contactPerson: 'Jane Smith', address: '456 Elm St, Town', phone: '987-654-3210', email: 'contact@samsung.com', website: 'www.samsung.com', editing: false },
        { id: 9, name: 'Apple', contactPerson: 'John Doe', address: '123 Main St, City', phone: '123-456-7890', email: 'contact@apple.com', website: 'www.apple.com', editing: false },
        { id: 10, name: 'Samsung', contactPerson: 'Jane Smith', address: '456 Elm St, Town', phone: '987-654-3210', email: 'contact@samsung.com', website: 'www.samsung.com', editing: false },
        { id: 11, name: 'Apple', contactPerson: 'John Doe', address: '123 Main St, City', phone: '123-456-7890', email: 'contact@apple.com', website: 'www.apple.com', editing: false },
        { id: 12, name: 'Samsung', contactPerson: 'Jane Smith', address: '456 Elm St, Town', phone: '987-654-3210', email: 'contact@samsung.com', website: 'www.samsung.com', editing: false },
        { id: 13, name: 'Apple', contactPerson: 'John Doe', address: '123 Main St, City', phone: '123-456-7890', email: 'contact@apple.com', website: 'www.apple.com', editing: false },
        { id: 14, name: 'Samsung', contactPerson: 'Jane Smith', address: '456 Elm St, Town', phone: '987-654-3210', email: 'contact@samsung.com', website: 'www.samsung.com', editing: false },
        { id: 15, name: 'Apple', contactPerson: 'John Doe', address: '123 Main St, City', phone: '123-456-7890', email: 'contact@apple.com', website: 'www.apple.com', editing: false },
        { id: 16, name: 'Samsung', contactPerson: 'Jane Smith', address: '456 Elm St, Town', phone: '987-654-3210', email: 'contact@samsung.com', website: 'www.samsung.com', editing: false },
    ]
}

export const suppliersReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_SUPPLIER':
            return {
               ...state,
                suppliers:  [action.payload, ...state.suppliers ]
            }
        case 'DELETE_SUPPLIER':
            return {
                ...state,
                suppliers: action.payload
            }
        case 'UPDATE_SUPPLIER':
            return {
                ...state,
                suppliers: action.payload
            }
        default:
            return state;
    }
}