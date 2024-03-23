import styled from "styled-components";
import { StyledPage, StyledSection } from "./StyledGlobal";

export const StyledProfile = styled(StyledSection)`
  margin: 1em auto;
`;
export const StyledProfileInfo = styled.div`
  width: 32em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
`;
export const StyledProfileItem = styled.span`
  border-radius: 0.5em;
  color: var(--text-primary);
  background-color: var(--bg-primary);
`;
export const StyledProfileValue = styled.span`
  color: var(--text-primary);
  background-color: var(--bg-primary);
`;

export const StyledProfileLogoutButton = styled.button`
  background-color: var(--bg-warning-soft);
  margin: 1em auto;
  color: var(--text-secondary);
  padding: 0.5em;
  grid-column: 1 / span 2;
`;
