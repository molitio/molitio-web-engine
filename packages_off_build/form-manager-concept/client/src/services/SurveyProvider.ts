import { AppConfig } from "../context";
import { Survey, SurveyPage, SurveyQuestion } from "../types";
import { PromiseResult, SurveyLimits } from "./types";

export const submitSurvey: (
  survey: Survey,
  token: string
) => Promise<PromiseResult> = async (survey: Survey, token: string) => {
  if (!survey.content) return "Rejected";
  const surveyString = JSON.stringify({
    name: survey.name,
    content: survey.content,
  });

  try {
    const fetchResult = await fetch(
      `${AppConfig.apiRootUrl}${AppConfig.apiSurveysPath}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: surveyString,
      }
    );

    const result = await fetchResult.json();

    if (result.id > 0) {
      return "Resolved";
    }

    return "Rejected";
  } catch (error) {
    console.error("Error", error);
    return "Error";
  }
};

export const getSurvey: (
  surveyId: number,
  userId: number,
  token: string
) => Promise<Survey> = async (
  surveyId: number,
  userId: number,
  token: string
) => {
  try {
    const fetchResult = await fetch(
      `${AppConfig.apiRootUrl}${AppConfig.apiSurveysPath}/${surveyId}?userId=${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const result = await fetchResult.json();

    if (result) {
      return result;
    }

    return { name: "" };
  } catch (error) {
    console.error("Error", error);
    return { name: "" };
  }
};

export const getSurveyWithLimits: (
  limits: SurveyLimits,
  token: string
) => Promise<Survey[]> = async (limit: SurveyLimits, token: string) => {
  try {
    const fetchResult = await fetch(
      `${AppConfig.apiRootUrl}${AppConfig.apiSurveysPath}?userId=${limit.userId}&$skip=${limit.skip}&$limit=${limit.limit}&$sort[createdAt]=-1`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const result = await fetchResult.json();

    if (result.data.length > 0) {
      return result.data as Survey[];
    }

    return [];
  } catch (error) {
    console.error("Error", error);
    return [];
  }
};

export const updateSurvey: (
  survey: Survey,
  token: string
) => Promise<PromiseResult> = async (survey: Survey, token: string) => {
  if (!survey) return "Rejected";
  const surveyString = JSON.stringify({
    name: survey.name,
    content: survey.content,
  });

  try {
    const fetchResult = await fetch(
      `${AppConfig.apiRootUrl}${AppConfig.apiSurveysPath}/${survey.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: surveyString,
      }
    );

    const result = await fetchResult.json();

    if (result.id > 0) {
      return "Resolved";
    }

    return "Rejected";
  } catch (error) {
    console.error("Error", error);
    return "Error";
  }
};

export const deleteSurvey: (
  id: number,
  token: string
) => Promise<PromiseResult> = async (id: number, token: string) => {
  if (!id || id <= 0) return "Rejected";
  try {
    const fetchResult = await fetch(
      `${AppConfig.apiRootUrl}${AppConfig.apiSurveysPath}/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const result = await fetchResult.json();

    if (result.id > 0) {
      return "Resolved";
    }

    return "Rejected";
  } catch (error) {
    console.error("Error", error);
    return "Error";
  }
};

export const isSurveyValid = (survey: Survey): boolean => {
  if (!survey) {
    return false;
  }

  // Check if the survey has a non-empty name
  if (survey.name.trim().length === 0) {
    return false;
  }

  // Check if the survey has at least one page
  const pageIds = Object.keys(survey.contentObject?.surveyPages ?? {});
  if (pageIds.length === 0) {
    return false;
  }

  // Check if each page has a non-empty name and at least one question
  for (const pageId of pageIds) {
    const page = survey.contentObject?.surveyPages?.[pageId];
    if (page && page.name.trim().length === 0) {
      return false;
    }

    const questionNumbers = Object.keys(page?.questions ?? {});
    if (questionNumbers.length === 0) {
      return false;
    }

    // Check if each question has a non-empty question string
    for (const questionNumber of questionNumbers) {
      const question = page?.questions[parseInt(questionNumber)];
      if (question && question.question.trim().length === 0) {
        return false;
      }
    }
  }

  // If all checks pass, the survey is valid
  return true;
};

export const parseSurveyInput = (input: string): Survey | null => {
  const lines = input.trim().split("\n");
  if (lines.length === 0) {
    return {
      name: "",
    };
  }

  const name = lines[0].trim();
  const surveyPages: Record<number, SurveyPage> = {};

  let currentPageId: number | null = null;
  let currentPage: SurveyPage | null = null;
  let questionIndex = 1;
  let currentPageIdCounter = 1;

  if (lines.length < 3) {
    return {
      name,
      contentObject: {
        surveyPages,
      },
    };

    // Invalid input, must have at least 3 lines
    /*  return null; */
  }

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line === "") {
      // Empty line indicates a new survey page
      const pageName = lines[i + 1].trim();

      if (currentPageId && currentPage) {
        surveyPages[currentPageId] = currentPage;
      }

      currentPageId = currentPageIdCounter;
      currentPageIdCounter++;
      currentPage = {
        name: pageName,
        questions: {},
      };

      i++; // Skip the next line as it is the page name
      questionIndex = 1; // Reset question index for the new page
    } else {
      // Non-empty line indicates a question
      if (currentPageId && currentPage) {
        const question: SurveyQuestion = {
          question: line,
        };

        currentPage.questions[questionIndex] = question;
        questionIndex++;
      }
    }
  }

  if (currentPageId && currentPage) {
    surveyPages[currentPageId] = currentPage;
  }

  return {
    name,
    content: input,
    contentObject: {
      surveyPages,
    },
  };
};

export const stringifySurvey = (survey: Survey): string => {
  let output = `${survey.name}\n`;

  for (const pageId in survey.contentObject?.surveyPages) {
    if (
      Object.prototype.hasOwnProperty.call(
        survey.contentObject.surveyPages,
        pageId
      )
    ) {
      const page: SurveyPage = survey.contentObject.surveyPages[pageId];
      output += `\n${page.name}\n`;
      for (const questionId in page.questions) {
        if (Object.prototype.hasOwnProperty.call(page.questions, questionId)) {
          const question: SurveyQuestion = page.questions[questionId];
          output += `${question.question}\n`;
        }
      }
    }
  }

  return output;
};
