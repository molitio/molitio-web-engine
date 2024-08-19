import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { resolveThemeBreakPointValues } from '../../utils';

export const StyledAppCover = styled.section`
    position: relative;
    width: 100%;
    height: 80vh;
    background-color: ${(props) => props?.theme?.palette?.background?.default};
`;

export const StyledAppCoverMainTitle = styled.h1`
    position: relative;
    text-align: center;
    font-weight: 400;
    font-size: 3.8em;
    opacity: 0.8;
    color: ${(props) => props?.theme?.palette?.text?.secondary ?? ''};
    text-shadow: ${(props) => props?.theme?.palette?.visual['appCoverTitleShadow']?.textShadow ?? ''};

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

export const StyledAppCoverImage = styled(Image)`
    object-fit: cover;
`;

export const StyledAppCoverContactLink = styled(Link)`
    position: relative;
    padding: 0.5em 1em;
    font-size: 1.5em;
    font-weight: 300;
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

export const StyledAppCoverButtonContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    margin: 2em auto;
    width: min-content;
    height: min-content;
`;

export const StyledAppCoverDescription = styled.pre`
    width: 42em;
    margin: auto;
    font-style: normal;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 1.5em;
    text-align: center;
    color: ${(props) => props?.theme?.palette?.text?.secondary};
    text-shadow: ${(props) => props?.theme?.palette?.visual['appCoverTextShadow']?.textShadow ?? ''};
    white-space: pre-wrap;
    position: relative;

    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'xl')}) {
        font-size: 1.2em;
        width: 36em;
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
