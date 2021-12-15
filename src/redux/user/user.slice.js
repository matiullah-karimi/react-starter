import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  authUser: null,
}

export const authUserSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAuthUser } = authUserSlice.actions

export default authUserSlice.reducer