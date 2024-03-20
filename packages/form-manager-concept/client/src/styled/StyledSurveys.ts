import styled from "styled-components";
import { StyledPage } from "./StyledGlobal";
import { StyledButton } from "./StyledControls";

export const StyledSurveys = styled(StyledPage)``;

export const StyledSurveyList = styled.ol`
  padding: 1em 0 0 0;
  width: 32em;
  list-style: none;
`;

export const StyledSurveyListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5em;
`;

export const StyledSurveyName = styled.span`
  text-align: left;
  flex: 6 0 5em;
`;

export const StyledSurveyControls = styled.div`
  text-align: right;
  flex: 1 0 5em;
  display: flex;
`;

export const StyledSurveyListButton = styled(StyledButton)`
  color: var(--text-primary);
  background-color: var(--bg-primary);
`;
