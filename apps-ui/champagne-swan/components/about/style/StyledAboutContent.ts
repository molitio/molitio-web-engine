import styled from 'styled-components';
import Image from 'next/image';
import { resolveThemeBreakPointValues } from '../../utils';

export const StyledAboutContent = styled.section`
    padding-top: 5em;
    position: relative;
    background: ${(props) => props?.theme?.palette?.background?.default ?? ''};
`;

export const StyledAboutContentPanel = styled.div`
    position: relative;
`;

export const StyledAboutContentPanelQuotes = styled.div`
    width: 52em;
    display: block;
    margin: 0 auto 3em auto;

    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'xl')}) {
        width: 30em;
    }
    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'lg')}) {
        width: 25em;
    }
    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'md')}) {
        width: 18em;
    }
`;

export const StyledAboutContentImagePanel = styled.div`
    padding-top: 2em;
    display: flex;
    width: max-content;
    margin: auto;
    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'xl')}) {
        flex-direction: column;
    }
`;

export const StyledAboutContentPanelImageAndEffect = styled.div`
    margin: 1em;
    position: relative;
    height: 15em;
    width: 23em;
    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'xxl')}) {
        height: 12em;
        width: 18em;
    }
    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'xl')}) {
        height: 18em;
        width: 28em;
    }
    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'md')}) {
        height: 16em;
        width: 22em;
    }
    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'sm')}) {
        height: 10em;
        width: 16em;
    }
`;

export const StyledAboutContentPanelImage = styled(Image)`
    object-fit: cover;
    border-radius: 1em;
    box-shadow: ${(props) => props?.theme?.palette?.visual['brandMessageImageShadow']?.boxShadow ?? ''};
`;

export const StyledAboutContentPanelText = styled.p`
    position: relative;
    margin: 0 auto;
    padding: 2em 6em;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 1.2em;
    color: ${(props) => props?.theme?.palette?.text?.primary ?? ''};
    text-shadow: ${(props) => props?.theme?.palette?.visual['brandMessageContentTextShadow']?.textShadow ?? ''};
`;

export const StyledAboutContentPanelTitle = styled.h1`
    text-align: center;
    font-weight: 400;
    font-size: 3.8rem;
    line-height: 2em;
    white-space: pre;
    color: ${(props) => props?.theme?.palette?.text?.primary ?? ''};
    text-shadow: ${(props) => props?.theme?.palette?.visual?.['aboutContentTitleShadow']?.textShadow ?? ''};

    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'xl')}) {
        font-size: 2.4em;
    }
    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'md')}) {
        font-size: 1.8em;
    }
`;

export const StyledAboutContentQuote = styled.p`
    color: ${(props) => props?.theme?.palette?.text?.primary ?? ''};
    font-style: italic;
    font-size: 24px;
    text-align: center;
    font-weight: 300;
    padding: 3em 0 1em 0;
    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'xl')}) {
        display: block;
        margin: auto;
        width: 20em;
    }
    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'md')}) {
        font-size: 17px;
        width: 17em;
    }
`;

export const StyledAboutContentQuoteAuthor = styled.p`
    color: ${(props) => props?.theme?.palette?.text?.primary ?? ''};
    font-size: 1.5em;
    text-align: end;
    font-weight: 300;
    padding: 0em 2em 0em 0;
    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'xl')}) {
        padding: 0 2em 0 0;
    }
    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'md')}) {
        padding: 0em 3em 0em 0;
        font-size: 1em;
    }
`;
