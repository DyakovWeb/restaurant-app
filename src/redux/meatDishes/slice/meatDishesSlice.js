import { createSlice } from '@reduxjs/toolkit'
import { fetchMeatDishes } from '../services/fetchMeatDishes';

const initialState = {
  meatDishes: [],
  isLoading: false,  
  errors: null,
  page: 0,
  limit: 4,
  hasMore: true
}

export const meatDishesSlice = createSlice({
  name: 'meatDishes',
  initialState,
  reducers: {
   setPage: (state, action) => {
      state.page = action.payload;
   }
  },
  extraReducers: (builder) => {
   builder.addCase(fetchMeatDishes.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
   }),
   builder.addCase(fetchMeatDishes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.meatDishes = [...state.meatDishes, ...action.payload];
      state.hasMore = action.payload.length >= state.limit;
   }),
   builder.addCase(fetchMeatDishes.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
   })
 },
})


export const { actions: meatDishesActions } = meatDishesSlice;

export const { reducer: meatDishesReducer } =  meatDishesSlice;