import styled from "styled-components";

export const StyledHeader = styled.h1`
  position: relative;
  color: var(--text-primary);
`;

export const StyledButton = styled.button`
  align-self: flex-start;
  width: 100%;
  color: var(--text-secondary);
  background-color: var(--bg-secondary);
  border: 2px solid var(--bg-primary);
  border-radius: 0.5em;
  padding: 0.5em;
  grid-column: 1 / span 2;
  &:hover {
    cursor: pointer;
  }
  &:hover:disabled {
    cursor: not-allowed;
  }
`;
