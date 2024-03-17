import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./AuthReducer";
import { surveyReducer } from "./SurveyReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  survey: surveyReducer,
});

export const appStore = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppContextStoreDispatch = typeof appStore.dispatch;
