import styled from "styled-components";
import { resolveThemeBreakPointValues } from "../../utils";

export const StyledBreakPointDisplay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  color: purple;
  padding: 0.4em;
  font-size: 2em;
  font-weight: 700;
  &:after {
    content: "WEB";
    @media (max-width: ${(props) =>
        resolveThemeBreakPointValues(props?.theme, "xxl")}) {
      content: "XXL";
    }
    @media (max-width: ${(props) =>
        resolveThemeBreakPointValues(props?.theme, "xl")}) {
      content: "XL";
    }
    @media (max-width: ${(props) =>
        resolveThemeBreakPointValues(props?.theme, "lg")}) {
      content: "LG";
    }
    @media (max-width: ${(props) =>
        resolveThemeBreakPointValues(props?.theme, "md")}) {
      content: "MD";
    }
    @media (max-width: ${(props) =>
        resolveThemeBreakPointValues(props?.theme, "sm")}) {
      content: "SM";
    }
    @media (max-width: ${(props) =>
        resolveThemeBreakPointValues(props?.theme, "xs")}) {
      content: "XS";
    }
  }
`;
