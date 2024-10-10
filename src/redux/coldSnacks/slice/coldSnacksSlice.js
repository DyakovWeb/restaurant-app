import { createSlice } from '@reduxjs/toolkit'
import { fetchColdSnacks } from '../services/fetchColdSnacks';

const initialState = {
  coldSnacks: [],
  isLoading: false,  
  errors: null,
  page: 0,
  limit: 4,
  hasMore: true
}

export const coldSnacksSlice = createSlice({
  name: 'coldSnacks',
  initialState,
  reducers: {
   setPage: (state, action) => {
      state.page = action.payload;
   }
  },
  extraReducers: (builder) => {
   builder.addCase(fetchColdSnacks.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
   }),
   builder.addCase(fetchColdSnacks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.coldSnacks = [...state.coldSnacks, ...action.payload];
      state.hasMore = action.payload.length >= state.limit;
   }),
   builder.addCase(fetchColdSnacks.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
   })
 },
})


export const { actions: coldSnacksActions } = coldSnacksSlice;

export const { reducer: coldSnacksReducer } =  coldSnacksSlice;