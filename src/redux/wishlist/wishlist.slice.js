import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,

  reducers: {
    toggleWishlistItem: (state, action) => {
        const item = state.items.find(item => item.id === action.payload.id);

        if (item) {
            state.items = state.items.filter(i => i.id !== item.id);
            return;
        }

      state.items = [...state.items, action.payload];
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleWishlistItem } = wishlistSlice.actions

export default wishlistSlice.reducer

// Selectors
export const selectWishlistItems = state => state.wishlist.items;
