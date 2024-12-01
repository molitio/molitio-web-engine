import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer } from './AuthReducer';

const rootReducer = combineReducers({
    auth: authReducer,
});

export const appContextStore = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof appContextStore.getState>;
export type AppContextStoreDispatch = typeof appContextStore.dispatch;
