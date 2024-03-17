import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppConfig, RootState, routeMap } from "../context";
import { StyledAppShell, StyledGlobal } from "../styled";
import AppLanding from "./AppLanding";
import Login from "./Login";
import Register from "./Register";
import Surveys from "./Surveys";
import ErrorPage from "./ErrorPage";
import Logout from "./Logout";
import Responses from "./Responses";
import SurveyNew from "./SurveyNew";
import Profile from "./Profile";
import NavigationHeader from "./NavigationHeader";
import SurveyEditor from "./SurveyEditor";

const AppShell: React.FC = () => {
  const loggedIn = useSelector(
    (state: RootState) => state.auth?.user?.loggedIn
  );
  return (
    <StyledAppShell>
      <BrowserRouter>
        <NavigationHeader />
        <Routes>
          <Route
            path={routeMap["root"].href}
            element={<AppLanding />}
            errorElement={<ErrorPage />}
          />
          <Route path={routeMap["login"].href} element={<Login />} />
          <Route path={routeMap["register"].href} element={<Register />} />
          {loggedIn ? (
            <>
              <Route
                path={routeMap["newSurvey"].href}
                element={<SurveyNew />}
              />
              <Route
                path={`${AppConfig.editSurveysPath}/:surveyId`}
                element={<SurveyEditor />}
              />
              <Route path={routeMap["surveys"].href} element={<Surveys />} />
              <Route
                path={routeMap["responses"].href}
                element={<Responses />}
              />
              <Route path={routeMap["profiles"].href} element={<Profile />} />

              <Route path={routeMap["logout"].href} element={<Logout />} />
            </>
          ) : (
            <></>
          )}
          {/*           <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
      </BrowserRouter>
      <StyledGlobal />
    </StyledAppShell>
  );
};

export default AppShell;
