import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { resolveThemeBreakPointValues } from "../../utils";

export const StyledBrandMessage = styled.section`
  position: relative;
  align-items: center;
  padding: 0 10vw 0 10vw;
  height: auto;
  background: ${(props) => props?.theme?.palette?.background?.default ?? ""};
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xxl")}) {
    padding: 0 8vw 0 8vw;
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    padding: 5vw 0 5vw 0;
    /* height: auto; */
  }
`;

export const StyledBrandMessagePanel = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1em;
  margin-top: 6em;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    flex-wrap: wrap;
    align-content: flex-start;
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    padding: 0;
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "sm")}) {
  }
`;

export const StyledBrandMessagePanelContent = styled.div`
  flex: 1 0 50%;
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    text-align: center;
    order: 1;
  }
`;

export const StyledBrandMessagePanelImage = styled.div`
  position: relative;
  flex: 1 0 50%;
  order: 2;
`;

export const StyledBrandMessageImageAndEffect = styled.div`
  position: relative;
  height: 24em;
  width: 32em;

  margin: 2em auto 4em auto;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xxl")}) {
    height: 20em;
    width: 28em;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    height: 26em;
    width: 36em;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "lg")}) {
    height: 24em;
    width: 32em;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    height: 18em;
    width: 24em;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "sm")}) {
    height: 12em;
    width: 16em;
  }
`;

export const StyledBrandMessageOfficeCleanerImage = styled(Image)`
  object-fit: cover;
  object-position: center;
  border-radius: 1em;
  box-shadow: ${(props) =>
    props?.theme?.palette?.visual["brandMessageOfficeCleaners"]?.boxShadow ??
    ""};
`;

export const StyledBrandMessageIcons = styled.div`
  padding-top: 4em;
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    padding-top: 8em;
  }
`;

export const StyledBrandMessageMainTitle = styled.h1`
  position: relative;
  text-align: center;
  font-weight: 400;
  font-size: 3.8em;
  opacity: 0.8;
  padding-top: 0.6em;
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["brandMessageTitleShadow"]?.textShadow ?? ""};

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    font-size: 3.2em;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    font-size: 2.4em;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "sm")}) {
    font-size: 1.8em;
  }
`;

export const StyledBrandMessagePanelTitle = styled.h1`
  font-family: "Lato", sans-serif;
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["brandMessageContentTitleShadow"]
      ?.textShadow ?? ""};
  font-weight: 400;
  font-size: 2.4em;
  margin: 0;
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    display: block;
    margin: auto;
    text-align: center;
    width: 10em;
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    font-size: 1.8em;
  }
`;

export const StyledBrandMessagePanelText = styled.p`
  position: relative;
  margin: 0 0 2em 0;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 1.4em;
  width: 24em;
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["brandMessageContentTextShadow"]
      ?.textShadow ?? ""};
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xxl")}) {
    width: 20em;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    width: auto;
    margin: 3em;
    text-align: start;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
  }
`;

export const StyledBrandMessagePanelContactLink = styled(Link)`
  position: relative;
  padding: 0.6em 1.2em;
  font-size: 1.5em;
  font-weight: 300;
  color: ${(props) => props?.theme?.palette?.text?.secondary};
  background-color: ${(props) => props?.theme?.palette?.primary?.main};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["aboutCoverTextShadow"]?.textShadow ?? ""};
  box-shadow: ${(props) =>
    props?.theme?.palette?.visual["buttonDafaultShadow"]?.boxShadow ?? ""};
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: ${(props) => props?.theme?.palette?.primary?.main};
    background-color: ${(props) => props?.theme?.palette?.text?.secondary};
  }
`;
