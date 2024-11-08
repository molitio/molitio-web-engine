import styled from "styled-components";
import { Link } from "react-router-dom";
import { RedirectLink } from "../components";

export const StyledNavigationHeader = styled.nav`
  display: flex;
  align-items: center;
`;

export const StyledNavigationBrandText = styled.a`
  text-decoration: none;
  white-space: nowrap;
  margin: 0;
  padding: 0 0 0 1em;
  &:visited {
    color: var(--text-primary);
  }
`;

export const StyledNavigationRouteCollection = styled.ul`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 1em;
  gap: 1em;
  list-style: none;
  justify-content: flex-end;
`;

export const StyledNavigationRoute = styled.li`
  &:hover {
    cursor: pointer;
  }
`;

export const StyledNavigationLink = styled.a`
  text-decoration: none;
  color: inherit;
  white-space: nowrap;
  padding: 0.5em;

  &:hover {
    background-color: var(--bg-secondary);
    border-radius: 0.5em;
    color: var(--text-secondary);
  }
`;
