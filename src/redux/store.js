import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart/cart.slice'
import productSlice from './product/product.slice'
import authUserSlice from './user/user.slice'
import wishlistSlice from './wishlist/wishlist.slice'

export const store = configureStore({
  reducer: {
      authUser: authUserSlice,
      cart: cartSlice,
      wishlist: wishlistSlice,
      products: productSlice
  },
})