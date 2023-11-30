import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

export const cartSlice = createSlice({
  name: "cartitem",
  initialState,
  reducers: {
    Addtocart: (state, action) => { 
      const obj = state.product.find((item) =>item.id === action.payload.id)
      if(obj){
        obj.quantity += action.payload.quantity
        obj.img = action.payload.img
        obj.size = action.payload.size
        obj.color = action.payload.color
      }else{
        state.product.push(action.payload);
      }
    },

   

    Delete: (state, action) => {
      state.product = state.product.filter(
        (item) => item.id !== action.payload.id
      );
    },
    Remove: (state, action) => {
      state.product = [];
    },
    Countsum: (state, action) => {
      const sum = state.product.find((item) => item.id === action.payload);
      if (sum) {
        sum.quantity++;
      }
    },
    Distcountsum: (state, action) => {
      const sum = state.product.find((item) => item.id === action.payload);
      if (sum.quantity === 1) {
        sum.quantity = 1;
      } else {
        sum.quantity--;
      }
    },
  },
});

export const { Addtocart, Delete, Remove, Countsum, Distcountsum } =
  cartSlice.actions;

export default cartSlice.reducer;
