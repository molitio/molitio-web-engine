import styled, { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
:root{
  --text-primary: #8EBCC7;
  --text-secondary: #00302c;
  --text-error: red;
  --bg-warning-soft: orange;
  --bg-primary: #192021;
  --bg-secondary: #779fa8;
  --bg-disabled: grey;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  line-height: 1.5em;
}

body {
  background-color: var(--bg-primary);
  font-size: 16px;
  font-family: "Gill Sans";
  color: var(--text-primary);
}
`;

export const StyledPage = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 80vh;
  padding: 1em 0 0 0;
`;

export const StyledSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1em 0 0 0;
`;
