import { rtkApi } from '@/api/rtkApi'
import { configureStore } from '@reduxjs/toolkit'
import { meatDishesReducer } from './meatDishes/slice/meatDishesSlice'
import { hotSnacksReducer } from './hotSnacks/slice/hotSnacksSlice'
import { coldSnacksReducer } from './coldSnacks/slice/coldSnacksSlice'
import { productReducer } from './productCard/slice/productCardSlice'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import { basketReducer } from './basket/slice/basketSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const persistProduct = {
  key: 'products',
  storage,
}

const persistedReducer = persistReducer(persistConfig, productReducer)

export const store = configureStore({
  reducer: {
    coldSnacks: coldSnacksReducer,
    hotSnacks: hotSnacksReducer,
    meatDishes: meatDishesReducer,
    product: persistedReducer,
    basket: persistReducer(persistProduct, basketReducer),
    [rtkApi.reducerPath]: rtkApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck : false}).concat(rtkApi.middleware),
})

export const persistor = persistStore(store);