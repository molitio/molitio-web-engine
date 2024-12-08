import styled from 'styled-components';
import { resolveThemeBreakPointValues } from '../../utils';

export const StyledPartners = styled.section`
    padding-top: 5em;
    position: relative;
`;

export const StyledPartnersTitle = styled.h1`
    position: relative;
    text-align: center;
    color: ${(props) => props?.theme?.palette?.text?.tertiary ?? ''};
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

export const StyledPartnersPanel = styled.div`
    padding: 4em 0;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export const StyledPartnersPanelItem = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    padding: 2em;
    flex: 1 0 25%;

    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'xl')}) {
        flex: 1 0 50%;
    }
`;

export const StyledPartnersImageContainer = styled.div`
    position: relative;
    width: 12em;
    height: 12em;
`;

export const StyledPartnersImage = styled.img`
    /* object-fit: cover; */
`;
