import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserReducerState, AuthenticatedUser } from './types';

const initialState: UserReducerState = {
    user: {
        loggedIn: false,
    },
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.user.loggedIn = action.payload;
        },
        setUser: (state, action: PayloadAction<AuthenticatedUser>) => {
            state.authenticatedUser = action.payload;
        },
    },
});

export const userReducer = userSlice.reducer;

export const { setLoggedIn } = userSlice.actions;
export const { setUser } = userSlice.actions;
