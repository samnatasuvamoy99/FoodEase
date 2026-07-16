import { createSlice } from "@reduxjs/toolkit";

 const CartSlice = createSlice({
  name:'cart',
  initialState:{
     items:[]
  },
  reducers:{
    addItems :(state , action) =>{
       state.items.push(action.payload);
    }
    ,
    removeItems:(state , action) =>{
       state.items.pop();
    }
    ,
    clearCart:(state , action) =>{
         state.items.length=0;
    },

  },
})

// then export your actions ans reducer
export const{ addItems,removeItems,clearCart} = CartSlice.actions;

export default CartSlice.reducer;