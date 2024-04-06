import React from "react";
import {
  StyledNavigationBrandText,
  StyledNavigationHeader,
  StyledNavigationLink,
  StyledNavigationRoute,
  StyledNavigationRouteCollection,
} from "../styled";
import { useSelector } from "react-redux";
import { RootState, displayRoute, routeMap } from "../context";

const NavigationHeader: React.FC = () => {
  const loggedIn = useSelector(
    (state: RootState) => state?.auth?.user?.loggedIn
  );

  const username = useSelector(
    (state: RootState) => state.auth?.user?.authenticatedUser?.fullname
  );

  return (
    <StyledNavigationHeader>
      <StyledNavigationBrandText href="/">
        📓 Surveys {username && loggedIn ? ` welcome ${username}` : ""}
      </StyledNavigationBrandText>
      <StyledNavigationRouteCollection>
        {Object.entries(routeMap).map((route) =>
          displayRoute(route[1], loggedIn) ? (
            <StyledNavigationRoute key={route[0]}>
              <StyledNavigationLink to={route[1].href}>
                {route?.[1].displayText}
              </StyledNavigationLink>
            </StyledNavigationRoute>
          ) : (
            ""
          )
        )}
      </StyledNavigationRouteCollection>
    </StyledNavigationHeader>
  );
};

export default NavigationHeader;
