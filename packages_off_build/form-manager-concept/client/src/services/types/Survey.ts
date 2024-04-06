export type PromiseResult = "Resolved" | "Rejected" | "Error";

export type SurveyLimits = {
  userId: number;
  skip: number;
  limit: number;
};
