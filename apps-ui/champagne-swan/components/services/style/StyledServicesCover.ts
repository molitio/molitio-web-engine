import styled from 'styled-components';
import { resolveThemeBreakPointValues } from '../../utils';

export const StyledServicesCover = styled.div`
    position: relative;
    width: 100%;
    height: 80vh;
`;

export const StyledServicesCoverMainTitle = styled.h1`
    position: relative;
    text-align: center;
    font-weight: 400;
    font-size: 3.8em;
    opacity: 0.8;
    padding-top: 0.6em;
    color: ${(props) => props?.theme?.palette?.text?.primary ?? ''};
    text-shadow: ${(props) => props?.theme?.palette?.visual['servicesTitleShadow']?.textShadow ?? ''};

    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'xl')}) {
        font-size: 3.2em;
    }

    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'md')}) {
        font-size: 2.4em;
    }

    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'sm')}) {
        font-size: 1.6em;
    }
`;

export const StyledServicesCoverImage = styled.img`
    object-fit: cover;
`;

export const StyledServicesCoverDescription = styled.pre`
    position: relative;
    width: 40em;
    margin: auto;
    font-style: normal;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 1.5em;
    text-align: center;
    line-height: 1.2em;
    white-space: pre-wrap;
    color: ${(props) => props?.theme?.palette?.text?.primary};
    text-shadow: ${(props) => props?.theme?.palette?.visual['servicesTitleShadow']?.textShadow ?? ''};

    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'xl')}) {
        font-size: 1.8em;
        width: 16em;
    }
    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'md')}) {
        font-size: 1em;
        width: 24em;
        padding: 0;
    }
    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'sm')}) {
        font-size: 0.8em;
        width: 18em;
    }
`;

export const StyledServicesCoverButtonContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    margin: 2em auto;
    width: min-content;
    height: min-content;
`;

export const StyledServicesCoverContactLink = styled.a`
    position: relative;
    padding: 0.5em 1em;
    font-size: 1.5em;
    font-weight: 300;
    width: min-content;
    height: min-content;
    color: ${(props) => props?.theme?.palette?.text?.secondary};
    background-color: ${(props) => props?.theme?.palette?.tertiary?.main};
    text-shadow: ${(props) => props?.theme?.palette?.visual['aboutCoverTextShadow']?.textShadow ?? ''};
    box-shadow: ${(props) => props?.theme?.palette?.visual['buttonDafaultShadow']?.boxShadow ?? ''};
    text-decoration: none;
    cursor: pointer;

    :hover {
        color: ${(props) => props?.theme?.palette?.tertiary?.main};
        background-color: ${(props) => props?.theme?.palette?.text?.secondary};
    }

    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'md')}) {
        font-size: 1.2em;
    }
    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'sm')}) {
        font-size: 1em;
    }
`;
