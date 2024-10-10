import { $api } from "@/api/api"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { getHotSnacksLimit, getHotSnacksPage } from "../selectors/hotSnacksSelectors";

export const fetchHotSnacks = createAsyncThunk(
   'hotSnacks/fetchHotSnacks',
   async (_, thunkAPI) => {
      const {rejectWithValue, getState} = thunkAPI;
      const page = getHotSnacksPage(getState());
      const limit = getHotSnacksLimit(getState());
      try {
         const response = await $api.get("/hotsnacks", {
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