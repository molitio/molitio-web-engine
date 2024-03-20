import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SurveyView from "./SurveyView";
import {
  StyledForm,
  StyledFormButton,
  StyledSurveyEdit,
  StyledFormTextArea,
} from "../styled";
import {
  AppConfig,
  RootState,
  setSelectedSurvey,
  setSelectedSurveyContentAndName,
} from "../context";
import {
  submitSurvey,
  isSurveyValid,
  getSurvey,
  updateSurvey,
  stringifySurvey,
  parseSurveyInput,
} from "../services";
import { useNavigate } from "react-router-dom";

type SurveyEditProps = {
  surveyId?: number;
};

const SurveyEdit: React.FC<SurveyEditProps> = (props) => {
  const { surveyId } = props;

  const navigate = useNavigate();

  const [inputDisabled, setInputDisabled] = React.useState<boolean>(true);

  const [inputValue, setInputValue] = React.useState<string>("");

  const dispatch = useDispatch();

  const selectedSurvey = useSelector(
    (state: RootState) => state.survey?.selectedSurvey
  );

  const authenticatedUser = useSelector(
    (state: RootState) => state?.auth?.user?.authenticatedUser
  );

  React.useEffect(() => {
    if (!authenticatedUser) return;
    dispatch(setSelectedSurvey({ name: "" }));

    if (surveyId) {
      const getExistingSurvey = async () => {
        const survey = await getSurvey(
          surveyId,
          authenticatedUser.id,
          authenticatedUser?.accessToken
        );

        if (survey) {
          survey.contentObject = parseSurveyInput(
            survey?.content ?? ""
          )?.contentObject;
          dispatch(setSelectedSurvey(survey));
          setInputValue(survey.content ?? "");
          setInputDisabled(!isSurveyValid(survey));
        }
      };
      getExistingSurvey();
    }
  }, []);

  React.useEffect(() => {
    if (inputValue.length > 0) {
      dispatch(setSelectedSurveyContentAndName(inputValue));
    }
  }, [inputValue]);

  React.useEffect(() => {
    if (!selectedSurvey) return;
    setInputDisabled(!isSurveyValid(selectedSurvey));
  }, [selectedSurvey]);

  const handleSubmitNewSurvey = (event: React.FormEvent) => {
    if (!selectedSurvey) return;
    event.preventDefault();
    if (!isSurveyValid(selectedSurvey)) {
      return;
    }

    const submit = async () => {
      const submitSurveyResponse = await submitSurvey(
        selectedSurvey,
        authenticatedUser?.accessToken ?? ""
      );
      if (submitSurveyResponse === "Resolved") {
        dispatch(setSelectedSurvey({ name: "" }));
        setInputValue("");
      }
    };

    const edit = async () => {
      const editSurveyResponse = await updateSurvey(
        selectedSurvey ?? { name: "" },
        authenticatedUser?.accessToken ?? ""
      );
      if (editSurveyResponse === "Resolved") {
        dispatch(setSelectedSurvey({ name: "" }));
        setInputValue("");
        navigate(AppConfig.surveysPath);
      }
    };

    surveyId ? edit() : submit();
  };

  const handleFormInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    {
      setInputValue(event.target.value);
    }
  };

  return (
    <StyledSurveyEdit>
      <StyledForm onSubmit={handleSubmitNewSurvey}>
        <StyledFormTextArea
          id="survey-name"
          name="survey-name"
          placeholder="Start typing the survey..."
          value={inputValue}
          onChange={handleFormInputChange}
          rows={12}
          required
        />
        <StyledFormButton
          disabled={inputDisabled}
          inputDisabled={inputDisabled}
          type="submit"
        >
          {surveyId ? "Edit" : "Submit"}
        </StyledFormButton>
        {selectedSurvey ? <SurveyView survey={selectedSurvey} /> : ""}
      </StyledForm>
    </StyledSurveyEdit>
  );
};

export default SurveyEdit;
