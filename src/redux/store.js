import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import cartSlice from './slices/cartSlice';
import productSlice from './slices/productSlice';

export const store = configureStore({
  reducer: {
    cart : cartSlice,
    auth: authSlice,
    product : productSlice
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false
  }),
});
