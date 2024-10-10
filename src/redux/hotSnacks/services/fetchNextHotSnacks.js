import { createAsyncThunk } from "@reduxjs/toolkit"
import { getHotSnacksHasMore, getHotSnacksLoading, getHotSnacksPage } from "../selectors/hotSnacksSelectors";
import { hotSnacksActions } from "../slice/hotSnacksSlice";
import { fetchHotSnacks } from "./fetchHotSnacks";

export const fetchNextHotSnacks = createAsyncThunk(
   'hotSnacks/fetchNextHotSnacks',
   async (_, thunkAPI) => {
      const {getState, dispatch} = thunkAPI;
      const page = getHotSnacksPage(getState());
      const loading = getHotSnacksLoading(getState());
      const hasMore = getHotSnacksHasMore(getState());

      if(hasMore && !loading) {
         dispatch(hotSnacksActions.setPage(page + 1));
         dispatch(fetchHotSnacks());
      }
   }
)