import { createSlice } from "@reduxjs/toolkit";

export const SearchedItems = createSlice({
  name: "searchedItemsReducer",
  initialState: {
    searchedItems: "",
  },
  reducers: {
    setSearchItem: (state, action) => {
      state.searchedItems = action.payload;
    },
   
  },
});

export const { setSearchItem } =
SearchedItems.actions;

export default SearchedItems.reducer;
