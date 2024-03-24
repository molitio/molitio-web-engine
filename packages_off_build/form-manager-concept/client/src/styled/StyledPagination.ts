// styled component for StyledPagination

import styled from "styled-components";
import { StyledButton } from "./StyledControls";

export const StyledPagination = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const StyledPaginationButton = styled(StyledButton)`
  font-size: 0.8rem;
  line-height: 0.1em;
`;

export const StyledPaginationContainer = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const StyledPaginationText = styled.span`
  font-size: 0.8em;
  white-space: nowrap;
  padding: 0 0.5em;
  color: var(--text-primary);
`;
