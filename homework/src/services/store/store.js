import { configureStore } from '@reduxjs/toolkit'
import messengerReducer from './messenger'
import profileReducer from './profile'

export default configureStore({
  reducer: {
    messenger: messengerReducer,
    profile: profileReducer
  },
})