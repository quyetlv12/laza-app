import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';

const initialState = {
 products : []
};

// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async amount => {
//     const response = await fetchCount(amount);
//     return response.data;
//   },
// );

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart : (state , action) => {
        // check hash in cart 
        const findItem = state.products.find(_elt => _elt.id === action.payload?.id)
        const hashItem = state.products.some(_elt => _elt.id === action.payload?.id && findItem.sizeSelect === action.payload.sizeSelect )
        if (hashItem) {
            const findItemIndex = state.products.findIndex(_elt => _elt.id === action.payload?.id)
            state.products[findItemIndex].quantity += 1 
        }else{
            state.products = [...state.products , action.payload]
        }
    },
    deteleItemRX : (state , action) =>{
        const findIndex = state.products.findIndex(_elt => _elt.id === action.payload.id && _elt.sizeSelect === action.payload.sizeSelect &&  _elt.quantity === action.payload.quantity)
        console.log("findIndex" , findIndex);
        const newList = state.products.splice(findIndex , 1)
        console.log("newList" ,newList);
        // state.products = newList
    },
    plusQuantityItem : (state , action) =>{
        const findIndex = state.products.findIndex(_elt => _elt.id === action.payload.id && _elt.sizeSelect === action.payload.sizeSelect &&  _elt.quantity === action.payload.quantity)
        state.products[findIndex].quantity += 1 
    },
    minusQuantityItem : (state , action) =>{
        const findIndex = state.products.findIndex(_elt => _elt.id === action.payload.id && _elt.sizeSelect === action.payload.sizeSelect &&  _elt.quantity === action.payload.quantity)
        state.products[findIndex].quantity -= 1 
    }
  },
//   extraReducers: builder => {
//     builder
//       .addCase(incrementAsync.pending, state => {
//         state.status = 'loading';
//       })
//       .addCase(incrementAsync.fulfilled, (state, action) => {
//         state.status = 'idle';
//         state.value += action.payload;
//       });
//   },
});

export const { addToCart , deteleItemRX, plusQuantityItem, minusQuantityItem } = cartSlice.actions;

export const productsInCart = state => state.cart.products
export default cartSlice.reducer;

