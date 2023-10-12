import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { apiSlice } from './api/apiSlice';
import authReducer from './features/authSlice';

const persitAuthConfig = {
  key: 'auth',
  storage,
};

const persistAuthReducer = persistReducer(persitAuthConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistAuthReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export const persistor = persistStore(store);
