import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rtkApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: __API__ }),
  endpoints: (builder) => ({
    getColdSnacks: builder.query({
      query: () => ({
         url: "/coldsnacks"
      }),
    }),
    getHotSnacks: builder.query({
      query: () => ({
         url: "/hotsnacks"
      }),
    }),
    getMeatDishes: builder.query({
      query: () => ({
         url: "/meatdishes"
      }),
    }),
  }),
})

export const useGetColdSnacks = rtkApi.useGetColdSnacksQuery;
export const useGetHotSnacks = rtkApi.useGetHotSnacksQuery;
export const useGetMeatDishes = rtkApi.useGetMeatDishesQuery;