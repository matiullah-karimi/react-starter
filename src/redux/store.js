import { configureStore } from '@reduxjs/toolkit'
import authUserSlice from './user/user.slice'

export const store = configureStore({
  reducer: {
      authUser: authUserSlice
  },
})