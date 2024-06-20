import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slice_thunk/cartSlice'
import restaurantSlice from './slice_thunk/restaurantSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurant : restaurantSlice
  },
})