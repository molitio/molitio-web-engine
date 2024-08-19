import styled from "styled-components";
import Image from "next/image";
import { resolveThemeBreakPointValues } from "../../utils";
import { StyledWaterSplash } from "../../common";

export const StyledServicesContent = styled.section`
  position: relative;
  padding: 5em 0 5em 0;
  width: 100%;
  align-items: center;
`;

export const StyledServicesContentMainTitle = styled.h1`
  position: relative;
  text-align: center;
  font-weight: 400;
  font-size: 3.8em;
  opacity: 0.8;
  padding-top: 0.6em;
  color: ${(props) => props?.theme?.palette?.text?.tertiary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["servicesTextShadow"]?.textShadow ?? ""};

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

export const StyledServicesContentPanel = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 0.6fr 1fr 1fr 0.6fr;
  gap: 2em;
  padding: 2em 0 2em 0;
  /*     justify-items: center;
  align-items: center;  */
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xxl")}) {
    grid-template-columns: 0.2fr 1fr 1fr 0.2fr;
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    grid-template-columns: 0fr 1fr 1fr 0fr;
  }
`;

export const StyledServicesLandingPanelImage = styled(Image)`
  position: absolute;
  object-fit: cover;
  object-position: center;
  border-radius: 1em;
  box-shadow: ${(props) =>
    props?.theme?.palette?.visual["brandMessageOfficeCleaners"]?.boxShadow ??
    ""};
`;

type StyledServicesContentPanelImageContainerType = {
  reversed?: boolean;
};
export const StyledServicesContentPanelImageContainer = styled.div<StyledServicesContentPanelImageContainerType>`
  grid-column: ${(props) => (props?.reversed ? 3 : 2)};
  grid-row: 1;
  position: relative;
  min-height: 400px;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    grid-row: 3;
    grid-column: 2/4;
    justify-self: center;
    width: 600px;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    width: 400px;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "sm")}) {
    width: 300px;
  }
`;

type StyledServicesContentBlockItemProps = {
  reversed?: boolean;
};
export const StyledServicesContentBlockItem = styled.div<StyledServicesContentBlockItemProps>`
  position: relative;

  grid-column: ${(props) => (props?.reversed ? 2 : 3)};
  grid-row: 1;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    grid-column: 2/4;
  }
`;

export const StyledServicesContentBlockItemInfo = styled.div`
  /*  outline: 3px dashed purple; */
  width: 100%;
  grid-column: 2/4;
  grid-row: 2;
  padding: 2em 0 2em 0;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xxl")}) {
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    /*     flex: 1 1 10em; */
  }
`;

export const StyledServicesContentBoxTitle = styled.h1`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  text-align: center;
  color: ${(props) => props?.theme?.palette?.text?.tertiary};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["servicesTitleShadow"]?.textShadow ?? ""};
  font-size: 2.4em;
  margin: 0;
  position: relative;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    display: block;
    margin: 0 auto 55px auto;
    text-align: center;
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    font-size: 1.6em;
  }
`;

export const StyledServicesContentBoxText = styled.p`
  font-family: "Lato", sans-serif;
  text-align: start;
  display: flex;
  color: ${(props) => props?.theme?.palette?.text?.tertiary};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["servicesTextShadow"]?.textShadow ?? ""};
  font-size: 1.2em;
  font-weight: 400;
  margin: 0.5em;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "lg")}) {
  }

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
  }
`;

export const StyledServicesContentPanelImageWaterSplash = styled(
  StyledWaterSplash
)`
  right: -80px;
  bottom: -110px;
  transform: rotate(-15deg);
  overflow: hidden;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "lg")}) {
    right: -60px;
    bottom: -90px;
    width: 200px;
    height: 200px;
  }
  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "sm")}) {
    right: -40px;
    bottom: -60px;
    width: 120px;
    height: 120px;
  }
`;

export const StyledServicesContentPanelImageAndEffect = styled.div`
  /* position: relative; */
  /*   outline: 3px dashed pink; */
  /*   height: 24em;
  width: 32em;
  margin: 0 8em; */

  /*   @media (max-width: ${(props) =>
    resolveThemeBreakPointValues(props?.theme, "xxl")}) {
    height: 20em;
    width: 28em;
  }

  @media (max-width: ${(props) =>
    resolveThemeBreakPointValues(props?.theme, "xl")}) {
    height: 20em;
    width: 28em;
    margin: auto;
  }

  @media (max-width: ${(props) =>
    resolveThemeBreakPointValues(props?.theme, "lg")}) {
    height: 20em;
    width: 28em;
  }

  @media (max-width: ${(props) =>
    resolveThemeBreakPointValues(props?.theme, "md")}) {
    height: 12em;
    width: 20em;
  }

  @media (max-width: ${(props) =>
    resolveThemeBreakPointValues(props?.theme, "sm")}) {
    height: 8em;
    width: 12em;
  } */
`;
