import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProductService } from '../../../services/product';
const initialState = {
 products : [],
 isLoading : false
};
export const getProductsAsync = createAsyncThunk(
  'product/GetProducts',
  async () => {
    const response = await ProductService.getProduct();
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
  extraReducers : (builder) =>{
    builder
    .addCase(getProductsAsync.pending, (state) => {
       state.isLoading = true;
    })
    .addCase(getProductsAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
  }
});

export const { getAllProducts } = productSlice.actions;

export const products = state => state.product.products
export const isLoading = state => state.product.isLoading
export default productSlice.reducer;

