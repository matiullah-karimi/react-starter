import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  hidden: true
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

    removeFromCart: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);

      if (itemIndex > -1) {
        state.items.splice(itemIndex, 1);
      }
    },

    toggleCartDropdownHidden(state) {
      state.hidden = !state.hidden;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, toggleCartDropdownHidden } = cartSlice.actions

export default cartSlice.reducer

// Selectors
export const selectCartItemsQuantity = state => state.cart.items.reduce((a, b) => a + b.quantity, 0);
export const selectCartItemsPrice = state => state.cart.items.reduce((a, b) => a + (b.quantity * b.price), 0).toFixed(2);
export const selectCartItems = state => state.cart.items;
export const selectCartDropdownHidden = state => state.cart.hidden;
