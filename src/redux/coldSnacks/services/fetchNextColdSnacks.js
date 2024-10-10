import { createAsyncThunk } from "@reduxjs/toolkit"
import { coldSnacksActions } from "../slice/coldSnacksSlice";
import { fetchColdSnacks } from "./fetchColdSnacks";
import { getColdSnacksHasMore, getColdSnacksLoading, getColdSnacksPage } from "../selectors/coldSnacksSelectors";

export const fetchNextColdSnacks = createAsyncThunk(
   'coldSnacks/fetchNextColdSnacks',
   async (_, thunkAPI) => {
      const {getState, dispatch} = thunkAPI;
      const page = getColdSnacksPage(getState());
      const loading = getColdSnacksLoading(getState());
      const hasMore = getColdSnacksHasMore(getState());

      if(hasMore && !loading) {
         dispatch(coldSnacksActions.setPage(page + 1));
         dispatch(fetchColdSnacks());
      }
   }
)