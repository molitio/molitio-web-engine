import React from "react";
import { StyledButton, StyledFormButton, StyledSurveyNew } from "../styled";
import SurveyEdit from "./SurveyEdit";
import { useParams } from "react-router-dom";

const SurveyNew: React.FC = () => {
  const { surveyId } = useParams();
  return (
    <StyledSurveyNew>
      <SurveyEdit surveyId={parseInt(surveyId ?? "")} />
    </StyledSurveyNew>
  );
};

export default SurveyNew;
