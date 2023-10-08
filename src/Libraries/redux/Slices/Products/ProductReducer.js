import { createSlice } from "@reduxjs/toolkit";

export const ProductReducer = createSlice({
  name: "productReducer",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
   
  },
});

export const { setProducts } =
ProductReducer.actions;

export default ProductReducer.reducer;
