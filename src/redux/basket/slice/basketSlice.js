import { calcTotalPrice } from '@/utils/calcTotalPrice';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  basket: [],
  isLoading: false,  
  errors: undefined,
  totalPrice: 0
}

const basketSlice = createSlice({
   name: 'basket',
   initialState,
   reducers: {
      addProduct (state, action) {
         const products = state.basket.find((product)=> product.id  === action.payload.id && product.product === action.payload.product);
         if (products) {
            products.count++
         } else {
            state.basket.push(action.payload);
         }
         state.totalPrice = calcTotalPrice(state.basket);
      },
      minusProduct (state, action) {
         const products = state.basket.find((product)=> JSON.stringify(product) === JSON.stringify(action.payload));
         if (products.count > 1) {
            products.count--
         } else {
            state.basket = state.basket.filter((product)=> JSON.stringify(product) !== JSON.stringify(action.payload))
         }
         state.totalPrice = calcTotalPrice(state.basket);
      },
      deleteProduct: (state, action) => {
         state.basket.splice(state.basket.findIndex((product) => product.id  === action.payload.id && product.product === action.payload.product), 1);
         state.totalPrice = calcTotalPrice(state.basket);
      }
   },
})


export const { actions: basketActions } = basketSlice;
export const { reducer: basketReducer } =  basketSlice;