import styled from 'styled-components';

export const StyledCardBoxCards = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 2em 10em 2em;
    width: 100%;
    @media (max-width: 800px) {
        min-width: 80vw;
    }
`;

export const StyledImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 8em;
    min-height: 8em;
    background-color: ${(props) => props?.theme?.palette?.primary?.main ?? 'none'};
    @media (max-width: 800px) {
        width: 8.5em;
        height: 8.5em;
    }
`;

export const StyledCardBoxCardImage = styled.img`
    opacity: 0.4;
    width: 92.15px;
    height: 76.02px;
`;

export const StyledCardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: top;
    min-width: 15em;
    color: ${(props) => props.theme?.palette?.text?.secondary ?? 'black'};
    margin-bottom: 1.25em;
    flex: 25%;
    @media (max-width: 1440px) {
        flex: 50%;
    }
    @media (max-width: 768px) {
        flex: 100%;
        margin-bottom: 1.5em;
    }
`;

export const StyledCardImageContainer = styled.div`
    background-color: ${(props) => props.theme?.palette?.background?.default ?? 'rgba(0,0,0,0.8)'};
    z-index: 1;
    width: 8em;
    height: 8em;
    margin: 0em 1em 0 0;
    align-self: flex-start;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.565);
    @media (max-width: 768px) {
        width: 8.5em;
        height: 8.5em;
    }
`;

export const StyledCardContent = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 5em;
`;

export const StyledCardTitle = styled.h2`
    margin-top: 0;
    font-size: 1.3rem;
    margin-bottom: 0.8em;
    overflow-wrap: break-word;
    @media (max-width: 768px) {
        font-size: 1.2rem;
        margin-bottom: 0.42em;
    }
`;

export const StyledCardText = styled.p`
    font-family: Helvetica, arial, sans-serif;
    overflow-wrap: break-word;
    font-weight: normal;
    margin: 0 0 2.2em 0;
    text-align: initial;
    font-size: 0.9rem;
    padding-right: 1em;
    max-width: 15em;
    @media (max-width: 800px) {
        max-width: 12em;
        font-size: 0.8rem;
    }
`;
