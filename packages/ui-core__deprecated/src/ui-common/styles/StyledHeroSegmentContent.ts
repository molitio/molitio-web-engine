import styled from 'styled-components';

export const StyledCoverImage = styled.div`
    position: relative;
`;

export const StyledCallToAction = styled.div`
    text-align: center;
`;

export const StyledMainTitle = styled.h1`
    text-align: center;
    margin-top: 0.7em;
    margin-bottom: 0.2em;
    font-size: 5rem;
    padding: 0 1em 0 1em;

    @media (max-width: 834px) {
        font-size: 3rem;
    }

    @media (max-width: 400px) {
        font-size: 2.5rem;
    }
`;

export const StyledDescription = styled.h3`
    font-weight: 400;
    font-family: Helvetica, sans-serif;
    margin: 0;
    text-align: center;
    margin-bottom: 6em;
    font-size: 1.25rem;
    padding: 0 2em 0 2em;

    @media (max-width: 400px) {
        margin-top: 2em;
        font-size: 0.9rem;
    }
`;

export const StyledSystemHorizontalLine = styled.hr`
    width: 200px;
    margin-top: 8em;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 400px) {
        width: 100px;
    }
`;
