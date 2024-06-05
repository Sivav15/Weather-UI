import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "../features/sidebarSlice";

export default configureStore({
  reducer: {
    sidebarReducer: sidebarSlice,
  },
});
