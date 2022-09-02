import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    isCheck: false
  },
  reducers: {
    check: (state) => {
      state.isCheck = !state.isCheck;
    }
  },
})

export const { check } = profileSlice.actions

export default profileSlice.reducer