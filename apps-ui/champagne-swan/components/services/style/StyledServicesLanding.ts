import styled from 'styled-components';
import Link from 'next/link';
import { resolveThemeBreakPointValues } from '../../utils';

export const StyledServicesLanding = styled.section`
    position: relative;
    padding: 5em 0 5em 0;
    width: 100%;
    align-items: center;
`;

export const StyledServicesIconContainer = styled.div`
    position: relative;
    padding-top: 12em;
    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'xl')}) {
        padding-top: 8em;
    }
`;

export const StyledServicesLandingMainTitle = styled.h1`
    position: relative;
    text-align: center;
    font-weight: 400;
    font-size: 3.8em;
    opacity: 0.8;
    padding-top: 0.6em;
    color: ${(props) => props?.theme?.palette?.text?.tertiary ?? ''};
    text-shadow: ${(props) => props?.theme?.palette?.visual['servicesTitleShadow']?.textShadow ?? ''};

    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'md')}) {
        margin: 2em auto;
        font-size: 2.4em;
    }
    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'xl')}) {
        font-size: 3.2em;
    }

    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'sm')}) {
        font-size: 1.8em;
    }
`;

type StyledServicesLandingProps = {
    reversed?: boolean;
};

export const StyledServicesLandingPanel = styled.div<StyledServicesLandingProps>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8em 0;
    flex-direction: ${(props) => (props?.reversed ? 'row-reverse' : 'row')};

    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'xl')}) {
        flex-direction: column;
    }
`;

export const StyledServicesLandingPanelContent = styled.div`
    margin: 0 3em;
    display: flex;
    flex-direction: column;
    justify-items: center;
    text-align: center;
    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'xl')}) {
    }
`;

export const StyledServicesLandingPanelImageContainer = styled.div`
    flex: 1 0 30vw;
    &:first-child {
        margin: 0;
        top: 0;
        left: 0;
    }
    align-self: flex-start;
    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'xl')}) {
        order: 3;
        padding: 4em 0 0 0;
        align-self: center;
        flex: 1 1 10em;
    }
`;

export const StyledContactLink = styled(Link)`
    font-size: 20px;
    color: ${(props) => props?.theme?.palette?.text?.interactive ?? ''};
    text-decoration: underline;
    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'xl')}) {
        position: relative;
        top: 30px;
        left: 30px;
    }
`;

export const StyledServicesLandingPanelImageAndEffect = styled.div`
    position: relative;
    height: 24em;
    width: 32em;
    margin: 0 8em;

    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'xxl')}) {
        height: 20em;
        width: 28em;
    }

    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'xl')}) {
        height: 20em;
        width: 28em;
        margin: auto;
    }

    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'lg')}) {
        height: 20em;
        width: 28em;
    }

    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'md')}) {
        height: 12em;
        width: 20em;
    }

    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'sm')}) {
        height: 8em;
        width: 12em;
    }
`;
