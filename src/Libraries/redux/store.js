import { configureStore } from "@reduxjs/toolkit";
// impot slice
import ProductReducer from "./Slices/Products/ProductReducer";
import SearchedItemsReducer from "./Slices/SearchedItems/SearchedItems"
export const store = configureStore({
  reducer: {
    products:ProductReducer,
    SearchedItem:SearchedItemsReducer
  },
});
