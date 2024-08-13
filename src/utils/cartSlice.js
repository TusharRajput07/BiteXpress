import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    dishObject: {},
    resObject: null,
  },
  reducers: {
    updateItem: (state, action) => {
      return {
        ...state,
        dishObject: action.payload,
      };
    },
    updateRes: (state, action) => {
      return {
        ...state,
        resObject: action.payload,
      };
    },
  },
});

export const { updateItem, updateRes } = cartSlice.actions;
export default cartSlice.reducer;
