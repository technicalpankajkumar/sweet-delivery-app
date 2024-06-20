import { createSelector, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface RestaurantSliceProps {
    restaurant: any;
}

const initialState: RestaurantSliceProps = {
  restaurant : {}
}

export const restaurantSlice = createSlice({
  name: 'restaurantSlice',
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<any>) => {
      state.restaurant = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRestaurant  } = restaurantSlice.actions

let restaurantDetails = state => state.restaurant.restaurant

export const selectRestaurant = createSelector([restaurantDetails],(a)=>a);

export default restaurantSlice.reducer