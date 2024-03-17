import React from "react";
import {
  StyledAppLanding,
  StyledAppLandingInfoText,
  StyledAppLandingTitle,
} from "../styled";

export const AppLanding: React.FC = () => {
  return (
    <StyledAppLanding>
      <StyledAppLandingTitle>
        Welcome to the Surveys application
      </StyledAppLandingTitle>
      <StyledAppLandingInfoText>
        To view and manages surveys, please log in.
      </StyledAppLandingInfoText>
    </StyledAppLanding>
  );
};

export default AppLanding;
