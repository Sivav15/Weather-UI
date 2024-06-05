import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    menuToggle: false,
  },
  reducers: {
    menuToggle: (state, action) => {
      state.menuToggle = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { menuToggle } = sidebarSlice.actions;

export default sidebarSlice.reducer;
