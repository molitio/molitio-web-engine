import React from "react";
import { Survey } from "../types";
import { StyledSurveyView } from "../styled";

type SurveyViewProps = {
  survey?: Survey;
};

const SurveyView: React.FC<SurveyViewProps> = (props) => {
  const { survey } = props;

  const content = survey?.contentObject;
  const pages = content?.surveyPages;
  {
    /*       {Object.keys(pages?.[page].questions ?? {}).map((question) => {
                <div key={page}>{`q: ${question}`}</div>; 
              })}*/
  }
  return survey ? (
    <StyledSurveyView>
      {survey.name.length === 0 ? "" : `s: ${survey.name}`}
      {Object.keys(pages ?? {}).map((page, i) => (
        <div key={i}>
          <h3>{pages?.[page]?.name}</h3>
          {Object.keys(pages?.[page]?.questions ?? {}).map((question, j) => (
            <div key={j}>{`q: ${
              pages?.[page]?.questions[parseInt(question)].question
            }`}</div>
          ))}
        </div>
      ))}
    </StyledSurveyView>
  ) : (
    ""
  );
};

export default SurveyView;
