import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NavMenuReducerState } from "./types";

const initialState: NavMenuReducerState = {
  navMenuControl: {
    isNavMenuOpen: false,
  },
};

const navMenuSlice = createSlice({
  name: "nav-menu",
  initialState,
  reducers: {
    setNavMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.navMenuControl.isNavMenuOpen = action.payload;
    }
  },
});

export const navMenuSliceReducer = navMenuSlice.reducer;

export const { setNavMenuOpen } = navMenuSlice.actions;
