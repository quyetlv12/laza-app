import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import cartSlice from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    cart : cartSlice,
    auth: authSlice,
  },
});
