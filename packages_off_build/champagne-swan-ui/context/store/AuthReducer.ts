import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthStoreState, AuthenticatedUser } from '../types';

const initialState: AuthStoreState = {
    user: {
        loggedIn: false,
    },
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.user.loggedIn = action.payload;
        },
        setUser: (state, action: PayloadAction<AuthenticatedUser>) => {
            state.user.authenticatedUser = action.payload;
        },
    },
});

export const authReducer = authSlice.reducer;

export const { setLoggedIn } = authSlice.actions;
export const { setUser } = authSlice.actions;
