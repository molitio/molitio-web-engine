import { Route, RouteMap } from "../types";
import { AppConfig } from "./AppConfig";

export const routeMap: RouteMap = {
  root: {
    displayText: "Home",
    href: AppConfig.home,
    requireAuth: false,
    hidden: true,
  },
  login: {
    displayText: "Login",
    href: AppConfig.loginPath,
    requireAuth: false,
  },
  register: {
    displayText: "Register",
    href: AppConfig.registerPath,
    requireAuth: false,
  },
  newSurvey: {
    displayText: "New Survey",
    href: AppConfig.newSurveysPath,
    requireAuth: true,
  },

  surveys: {
    displayText: "Surveys",
    href: AppConfig.surveysPath,
    requireAuth: true,
  },

  responses: {
    displayText: "Responses",
    href: AppConfig.responsesPath,
    requireAuth: true,
  },

  profiles: {
    displayText: "Profile",
    href: AppConfig.profilePath,
    requireAuth: true,
  },

  logout: {
    displayText: "Logout",
    href: AppConfig.logoutPath,
    requireAuth: true,
  },
};

export const displayRoute = (route: Route, loggedIn: boolean) => {
  if (route.hidden) {
    return false;
  } else if (!loggedIn && route.requireAuth) {
    return false;
  } else if (loggedIn && route.requireAuth) {
    return true;
  } else if (!route.requireAuth && loggedIn) {
    return false;
  } else if (!route.requireAuth) {
    return true;
  }
};
