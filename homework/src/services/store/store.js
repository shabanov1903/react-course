import { configureStore } from '@reduxjs/toolkit'
import messengerReducer from './messenger'

export default configureStore({
  reducer: {
    messenger: messengerReducer
  },
})