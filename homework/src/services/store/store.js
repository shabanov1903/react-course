import { combineReducers, configureStore } from '@reduxjs/toolkit'
import messengerReducer from './slices/messenger'
import profileReducer from './slices/profile'
import { thunkDispatch } from './thunk/thunk'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  messenger: messengerReducer,
  profile: profileReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    thunk: {
      extraArgument: thunkDispatch
    }
  })
})

export const persistor = persistStore(store)
