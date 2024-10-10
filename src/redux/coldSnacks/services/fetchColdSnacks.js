import { $api } from "@/api/api"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { getColdSnacksLimit, getColdSnacksPage } from "../selectors/coldSnacksSelectors";

export const fetchColdSnacks = createAsyncThunk(
   'coldSnacks/fetchColdSnacks',
   async (_, thunkAPI) => {
      const {rejectWithValue, getState} = thunkAPI;
      const page = getColdSnacksPage(getState());
      const limit = getColdSnacksLimit(getState());
      try {
         const response = await $api.get("/coldsnacks", {
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