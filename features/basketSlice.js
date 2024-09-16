import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalCost: 0
    },
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
                state.totalCost += existingItem.price;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
                state.totalCost += action.payload.price;
            }
            state.totalQuantity += 1;


        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
            state.totalQuantity -= 1; // Decrease total quantity when an item is removed
            state.totalCost -= action.payload.price

        },
        incrementByAmount: (state, action) => {
            state.totalQuantity += action.payload;
        },
    },
});

export const { addItem, removeItem, incrementByAmount } = basketSlice.actions;

export const selectBasketItems = state => state.basket.items;
export const selectTotalQuantity = state => state.basket.totalQuantity;
export const selectTotalCost = state => state.basket.totalCost;

export default basketSlice.reducer;
