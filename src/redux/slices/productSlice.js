import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';

const initialState = {
 products : []
};
export const getProductAsync = createAsyncThunk(
  'cart/GetProducts',
  async () => {
    const response = await Products;
    return response.data;
  },
);
export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getAllProducts : (state , action) =>{
    state.products = action.payload
    }
  },
});

export const { getAllProducts } = productSlice.actions;

export const products = state => state.product.products
export default productSlice.reducer;

