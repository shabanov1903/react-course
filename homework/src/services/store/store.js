import { configureStore } from '@reduxjs/toolkit'
import messengerReducer from './slices/messenger'
import profileReducer from './slices/profile'

export default configureStore({
  reducer: {
    messenger: messengerReducer,
    profile: profileReducer
  },
})