import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addToCart: (state, action) => {
        const itemIndex = state.items.findIndex(item => item.id === action.payload.id);

        if (itemIndex > -1) {
            state.items[itemIndex].quantity = state.items[itemIndex].quantity + 1;
            return;
        }

      state.items.push({...action.payload, quantity: 1});
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer

// Selectors
export const selectCartItemsQuantity = state => state.cart.items.reduce((a, b) => a + b.quantity, 0);
