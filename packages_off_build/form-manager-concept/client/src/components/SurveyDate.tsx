import React from "react";
import { StyledSurveyDate, StyledSurveyDateSpan } from "../styled";

type SurveyDateProps = {
  dateNumber: number;
};

const convertDate = (dateNumber: number) => {
  if (dateNumber <= 0) return {};

  const newDate = new Date(dateNumber);

  return {
    date: newDate.toLocaleDateString(),
    time: newDate.toLocaleTimeString(),
  };
};

const SurveyDate: React.FC<SurveyDateProps> = (props) => {
  const { dateNumber } = props;

  const { date, time } = convertDate(dateNumber);

  return (
    <StyledSurveyDate>
      <StyledSurveyDateSpan>{date}</StyledSurveyDateSpan>
      <br />
      <StyledSurveyDateSpan>{time}</StyledSurveyDateSpan>
    </StyledSurveyDate>
  );
};

export default SurveyDate;
