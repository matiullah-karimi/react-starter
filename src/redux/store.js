import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart/cart.slice'
import authUserSlice from './user/user.slice'

export const store = configureStore({
  reducer: {
      authUser: authUserSlice,
      cart: cartSlice
  },
})