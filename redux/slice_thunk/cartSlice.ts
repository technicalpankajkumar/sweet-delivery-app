import { createSelector, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartSliceProps {
    item: any[];
}

const initialState: CartSliceProps = {
  item : []
}

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {

    addToCart: (state, action: PayloadAction<any>) => {
      state.item = [...state.item,action.payload]
    },
    removeFromCart: (state, action: PayloadAction<any>) => {
        let newCart = [...state.item];
        let itemIndex = state.item.findIndex(item => item.id ===action.payload.id)
        if(itemIndex >=0){
            newCart.splice(itemIndex,1);
        }else{
            console.log("cont't remove the item that is not added to cart !")
        }
        state.item = newCart;
    },
    emptyCart: (state) => {
    state.item =[];
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,removeFromCart,emptyCart  } = cartSlice.actions

let itemById = (state,id) => state.cart?.item?.filter(item => item?.id == id);
let cartTotal =  state => state.cart?.item?.reduce((a,c)=> a = a + c.price,0 );
let cartItem = state => state?.cart?.item; 

export const selectCartItems = createSelector([cartItem],(a) => a);
export const selectCartItemsById = createSelector([itemById],(a) =>a)
export const selectCartTotal = createSelector([cartTotal],(a)=>a)

export default cartSlice.reducer