import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user';
import { navMenuSliceReducer } from './nav-menu';

const rootReducer = combineReducers({
    user: userReducer,
    nav: navMenuSliceReducer,
});

export const appContext = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof appContext.getState>;
export type AppContextDispatch = typeof appContext.dispatch;
