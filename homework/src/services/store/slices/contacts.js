import { createSlice } from '@reduxjs/toolkit'

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactList: []
  },
  reducers: {
    update: (state, action) => {
      return {
        contactList: action.payload
      }
    }
  },
})

export const { update } = contactsSlice.actions

export default contactsSlice.reducer
