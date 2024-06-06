import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    menuToggle: false,
    countryName: "india",
  },
  reducers: {
    menuToggle: (state, action) => {
      state.menuToggle = action.payload;
    },
    setCountry: (state, action) => {
      state.countryName = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { menuToggle, setCountry } = sidebarSlice.actions;

export default sidebarSlice.reducer;
