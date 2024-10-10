import { $api } from "@/api/api"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { getMeatDishesLimit, getMeatDishesPage } from "../selectors/meatDishesSelectors";

export const fetchMeatDishes = createAsyncThunk(
   'meatDishes/fetchMeatDishes',
   async (_, thunkAPI) => {
      const {rejectWithValue, getState} = thunkAPI;
      const page = getMeatDishesPage(getState());
      const limit = getMeatDishesLimit(getState());
      try {
         const response = await $api.get("/meatdishes", {
            params: {
               _page: page,
               _limit: limit
            }
         });
         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   },
 )