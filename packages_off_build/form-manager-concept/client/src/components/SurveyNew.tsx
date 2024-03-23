import React from "react";
import { StyledButton, StyledFormButton, StyledSurveyNew } from "../styled";
import SurveyEdit from "./SurveyEdit";

const SurveyNew: React.FC = () => {
  return (
    <StyledSurveyNew>
      <SurveyEdit />
    </StyledSurveyNew>
  );
};

export default SurveyNew;
