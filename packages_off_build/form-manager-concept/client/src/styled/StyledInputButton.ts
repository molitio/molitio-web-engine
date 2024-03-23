import styled from "styled-components";
import { StyledFormInput } from "./StyledForm";

export const StyledInputButton = styled.button`
  padding: 0 3em 0 0;
  color: var(--text-primary);
  background-color: var(--bg-primary);
  text-align: right;
  display: flex;
`;

export const StyledInputButtonInput = styled(StyledFormInput)`
  /*   padding: 5px 1em;
  line-height: 1em;
  font-size: 1.8rem;
  margin: 0; */
`;
