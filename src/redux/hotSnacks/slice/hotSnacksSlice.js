import { createSlice } from '@reduxjs/toolkit'
import { fetchHotSnacks } from '../services/fetchHotSnacks';

const initialState = {
  hotSnacks: [],
  isLoading: false,  
  errors: null,
  page: 0,
  limit: 4,
  hasMore: true
}

export const hotSnacksSlice = createSlice({
  name: 'hotSnacks',
  initialState,
  reducers: {
   setPage: (state, action) => {
      state.page = action.payload;
   }
  },
  extraReducers: (builder) => {
   builder.addCase(fetchHotSnacks.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
   }),
   builder.addCase(fetchHotSnacks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hotSnacks = [...state.hotSnacks, ...action.payload];
      state.hasMore = action.payload.length >= state.limit;
   }),
   builder.addCase(fetchHotSnacks.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
   })
 },
})


export const { actions: hotSnacksActions } = hotSnacksSlice;

export const { reducer: hotSnacksReducer } =  hotSnacksSlice;