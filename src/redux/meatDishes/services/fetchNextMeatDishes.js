import { createAsyncThunk } from "@reduxjs/toolkit"
import { getMeatDishesHasMore, getMeatDishesLoading, getMeatDishesPage } from "../selectors/meatDishesSelectors";
import { meatDishesActions } from "../slice/meatDishesSlice";
import { fetchMeatDishes } from "./fetchMeatDishes";

export const fetchNextMeatDishes = createAsyncThunk(
   'meatDishes/fetchNextMeatDishes',
   async (_, thunkAPI) => {
      const {getState, dispatch} = thunkAPI;
      const page = getMeatDishesPage(getState());
      const loading = getMeatDishesLoading(getState());
      const hasMore = getMeatDishesHasMore(getState());

      if(hasMore && !loading) {
         dispatch(meatDishesActions.setPage(page + 1));
         dispatch(fetchMeatDishes());
      }
   }
)