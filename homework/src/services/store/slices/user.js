import { createSlice } from '@reduxjs/toolkit';
import { createUserThunk, loginThunk } from '../thunk/extraReducers';
import { BehaviorSubject } from 'rxjs';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: null,
    token: null,
    id: null,
    auth$: new BehaviorSubject(null)
  },
  reducers: {
    addUser: (state, action) => {
      return state = action.payload
    },
    removeUser: (state) => {
      state.email = null
      state.token = null
      state.id = null
    }
  },
  extraReducers: {
    [createUserThunk.fulfilled]: (state, action) => {
      return state = action.payload;
    },
    [loginThunk.fulfilled]: (state, action) => {
      if (action.payload) state.auth$.next(action.payload.id);
      return state = action.payload;
    }
  }
})

export const { addUser, removeUser } = userSlice.actions
export default userSlice.reducer
