import styled from 'styled-components';
import { resolveThemeBreakPointValues } from '../../utils';

export const StyledContactContent = styled.section`
    padding: 5em 0 0 0;
    position: relative;
`;

export const StyledContactInfo = styled.div`
    padding: 5em 0 0 0;
    position: relative;
`;

export const StyledFormText = styled.p`
    position: relative;
    color: ${(props) => props?.theme?.palette?.text?.primary ?? ''};
    font-family: 'Lato' sans-serif;
    font-size: 1.2em;
    text-align: center;
    width: 40em;
    font-weight: 400;

    margin: 2em auto 0 auto;
    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'xl')}) {
        width: 20em;
        font-size: 1em;
    }
`;

export const SyledFormBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'xl')}) {
        flex-direction: column-reverse;
    }
`;

export const StyledTitle = styled.h1`
    padding: 2em 0 0 0;
    position: relative;
    text-align: center;
    color: ${(props) => props?.theme?.palette?.text?.primary ?? ''};
    text-shadow: ${(props) => props?.theme?.palette?.visual?.['contactTitleShadow']?.textShadow ?? ''};
    font-weight: 400;
    font-size: 3.8em;
    margin-top: 0em;

    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'xl')}) {
        font-size: 2.4em;
    }
    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'md')}) {
        font-size: 1.8em;
    }
`;

export const StyledFormContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    padding: 4em 0 0 10em;
    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'xl')}) {
        padding: 5em 0 0 0;
    }
`;

export const StyledContactInfoContainer = styled.div`
    position: relative;
    text-align: center;
    padding: 4em;
    color: white;
    line-height: 1.6;

    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'xl')}) {
        padding: 5em 0 0 0;
    }
`;

export const StyledContactInfoText = styled.p`
    font-size: 1.8rem;
    font-family: 'Tenor Sans', sans-serif;
    font-weight: 300;
    color: ${(props) => props?.theme?.palette?.text?.primary ?? ''};
    text-shadow: ${(props) => props?.theme?.palette?.visual?.['contactInfoTextShadow']?.textShadow ?? ''};

    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'xl')}) {
        font-size: 1.2em;
    }
`;

export const StyledContactContentLogoContainer = styled.div`
    position: relative;
    padding-top: 100px;
    display: block;
    height: 12em;
    width: 12em;
    margin: auto;
`;

export const StyledContactContentLogoImage = styled.img`
    object-fit: cover;
`;
