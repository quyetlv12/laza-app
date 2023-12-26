import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';

const initialState = {
  logged : true,
  user : '',
  token : ''
};


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login : state => {
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

export const { login } = authSlice.actions;

export const selectCount = state => state.auth.value;
export const loggedStatus = state => state.auth.logged
export default authSlice.reducer;

