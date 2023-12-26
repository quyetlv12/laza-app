import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CartService } from "../../../services/cart";
import { SC } from "../../configs";
// import { fetchCount } from './counterAPI';

const initialState = {
  products: [],
  loadingStatus: false,
};

export const getProductAsync = createAsyncThunk(
  "cart/GetProducts",
  async () => {
    const response = await CartService.getProductInCart();
    return response.data;
  }
);
export const updateItemAsync = createAsyncThunk(
  "cart/Update",
  async ({id , item}) => {
    console.log("data" , item);
    const response = await CartService.updateItemInCart(id, item);
    return response;
  }
);
export const addProductAsync = createAsyncThunk(
  "cart/AddToCart",
  async (item) => {
    const response = await CartService.addToCart(item);
    return response;
  }
);
export const deteteProductAsync = createAsyncThunk(
  "cart/AddToCart",
  async (id, reActionApi, toast) => {
    const response = await CartService.deleteItemInCart(id);
    return response;
  }
);
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // check hash in cart
      const findItem = state.products.find(
        (_elt) => _elt.id === action.payload?.id
      );
      const hashItem = state.products.some(
        (_elt) =>
          _elt.id === action.payload?.id &&
          findItem.sizeSelect === action.payload.sizeSelect
      );
      if (hashItem) {
        const findItemIndex = state.products.findIndex(
          (_elt) => _elt.id === action.payload?.id
        );
        state.products[findItemIndex].quantity += 1;
      } else {
        state.products = [...state.products, action.payload];
      }
    },
    deteleItemRX: (state, action) => {
      console.log("action.payload" , action.payload);
      const findIndex = state.products.findIndex(
        (_elt) =>
          _elt.id === action.payload.id &&
          _elt.sizeSelect === action.payload.sizeSelect &&
          _elt.quantity === action.payload.quantity
      );
      const newList = state.products.splice(findIndex, 1);
      // state.products = newList
    },
    plusQuantityItem: (state, action) => {
      const findIndex = state.products.findIndex(
        (_elt) =>
          _elt.id === action.payload.id &&
          _elt.sizeSelect === action.payload.sizeSelect &&
          _elt.quantity === action.payload.quantity
      );
      state.products[findIndex].quantity += 1;
    },
    minusQuantityItem: (state, action) => {
      const findIndex = state.products.findIndex(
        (_elt) =>
          _elt.id === action.payload.id &&
          _elt.sizeSelect === action.payload.sizeSelect &&
          _elt.quantity === action.payload.quantity
      );
      state.products[findIndex].quantity -= 1;
    },
  },
  extraReducers: (builder) => {
    // --- Xử lý trong reducer với case pending / fulfilled / rejected ---
    builder
      .addCase(getProductAsync.pending, (state) => {
        //  state.status = 'loading';
        console.log("đang lấy sản phẩm");
      })
      .addCase(getProductAsync.fulfilled, (state, action) => {
        console.log("lấy sản phẩm thành công !");
        state.products = action.payload;
      });
  },
});

export const { addToCart, deteleItemRX, plusQuantityItem, minusQuantityItem } =
  cartSlice.actions;

export const productsInCart = (state) => state.cart.products;
export default cartSlice.reducer;
