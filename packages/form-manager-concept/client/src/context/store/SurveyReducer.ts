import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Survey, SurveyStoreState } from "../../types";
import { parseSurveyInput } from "../../services";

const initialState: SurveyStoreState = {};

const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    setSelectedSurvey: (state, action: PayloadAction<Survey>) => {
      if (!action.payload) return;
      state.selectedSurvey = action.payload;
    },
    setSelectedSurveyContentAndName: (state, action: PayloadAction<string>) => {
      if (!action.payload) {
        return;
      }

      const parsedSurvey = parseSurveyInput(action.payload);
      if (parsedSurvey) {
        state.selectedSurvey = { ...state.selectedSurvey, ...parsedSurvey };
      }
    },
    setSuveyCollection: (state, action: PayloadAction<Survey[]>) => {
      state.surveyCollection = action.payload;
    },
  },
});

export const surveyReducer = surveySlice.reducer;

export const { setSelectedSurvey } = surveySlice.actions;
export const { setSelectedSurveyContentAndName } = surveySlice.actions;
export const { setSuveyCollection } = surveySlice.actions;
