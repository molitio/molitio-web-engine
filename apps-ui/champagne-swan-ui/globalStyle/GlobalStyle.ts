import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
  box-sizing: border-box;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;

  font-family: "Tenor Sans", sans-serif;
  }

  *, *::before, *::after {
  box-sizing: inherit;
  }

  h1 {
    font-family: "Fahkwang", sans-serif;
  }

  * {
  /*   outline: 1px solid red; */
}
`;

export default GlobalStyle;
