import { combineReducers, configureStore } from '@reduxjs/toolkit'
import messengerReducer from './slices/messenger'
import profileReducer from './slices/profile'
import contactsReducer from './slices/contacts'
import userReducer from './slices/user'
import { thunkDispatch } from './thunk/thunk'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  messenger: messengerReducer,
  profile: profileReducer,
  contacts: contactsReducer,
  user: userReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  // reducer: persistedReducer,
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    thunk: {
      extraArgument: thunkDispatch
    },
    serializableCheck: false
  })
})

export const persistor = persistStore(store)
