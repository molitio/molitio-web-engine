import styled from "styled-components";
import Image from "next/image";
import { resolveThemeBreakPointValues } from "../../utils";

export const StyledOpinions = styled.section`
  padding-top: 5em;
  position: relative;
`;

export const StyledOpinionsIconContainer = styled.div`
  position: relative;
`;

export const StyledOpinionsMainTitle = styled.h1`
  position: relative;
  text-align: center;
  font-weight: 400;
  font-size: 3.8em;
  opacity: 0.8;
  padding-top: 0.6em;
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  text-shadow: ${(props) =>
    props?.theme?.palette?.visual["opinionsTitleShadow"]?.textShadow ?? ""};

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

export const StyledOpinionsPanel = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3em;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    margin-right: auto;
    margin-left: auto;
  }
`;

export const StyledOpinionsAvatarImage = styled(Image)`
  object-fit: cover;
  border-radius: 50%;
`;

export const StyledOpinionsAvatarImageContainer = styled.div`
  position: relative;
  height: 10em;
  width: 10em;
  margin: auto;
`;

export const StyledOpinionsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "xl")}) {
    align-items: center;
    flex-direction: column;
  }
`;

export const StyledOpinionText = styled.p`
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  /*   font-family: "Lato", sans-serif; */
  font-style: italic;
  font-weight: 300;
  text-align: left;
  font-size: 1.2em;
  width: 300px;
  margin: 0.5em auto 0.5em auto;

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "md")}) {
    font-size: 1em;
  }
`;

export const StyledOpinionTitle = styled.pre`
  color: ${(props) => props?.theme?.palette?.text?.primary ?? ""};
  text-align: center;
  font-family: "Lato" sans-serif;
  font-weight: 100;
  font-size: 1.2em;
  width: 300px;
  margin: auto;
`;

export const StyledOpinionsLogoContainer = styled.div`
  position: relative;
  padding-top: 100px;
  display: block;
  height: 12em;
  width: 12em;
  margin: auto;
`;

export const StyledOpinionsLogoImage = styled(Image)`
  object-fit: cover;
`;
