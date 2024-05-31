import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NavMenuReducerState } from './types';

const initialState: NavMenuReducerState = {
    navMenuControl: {
        toggleNavMenuOpen: false,
    },
};

const navMenuSlice = createSlice({
    name: 'nav-menu',
    initialState,
    reducers: {
        setNavMenuOpen: (state, action: PayloadAction<boolean>) => {
            state.navMenuControl.toggleNavMenuOpen = action.payload;
        },
    },
});

export const navMenuSliceReducer = navMenuSlice.reducer;

export const { setNavMenuOpen } = navMenuSlice.actions;
