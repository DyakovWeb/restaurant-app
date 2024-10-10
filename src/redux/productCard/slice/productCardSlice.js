import { createSlice } from '@reduxjs/toolkit'
import { fetchProduct } from '../services/fetchProductCard';

const initialState = {
  product: [],
  isLoading: false,  
  errors: null,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
   builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
   }),
   builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
   }),
   builder.addCase(fetchProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
   })
 },
})


export const { actions: productActions } = productSlice;

export const { reducer: productReducer } =  productSlice;