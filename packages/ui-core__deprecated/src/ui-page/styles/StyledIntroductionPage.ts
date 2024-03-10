import styled from 'styled-components';

export const StyledIntroAbout = styled.div`
    position: relative;
    display: block;
`;

export const StyledLeaderImage = styled.img`
    width: 100%;
    margin-bottom: -1em;
    margin-top: 0;
`;

export const StyledImageLayer = styled.div``;

export const StyledIntroductionContent = styled.div`
    padding: 0 5.25em 0 5.25em;
    background-color: ${(props) => props.theme?.palette?.primary?.main};

    @media (max-width: 834px) {
        padding: 0 4.25em 4.25em;
    }

    @media (max-width: 400px) {
        padding: 0 2.25em 2.25em;
    }
`;

export const StyledSignatureText = styled.h3`
    color: ${(props) => props.theme?.palette?.text?.primary};
    margin: 0;
    text-align: end;
    padding-bottom: 1em;
    font-family: Helvetica, sans-serif;
    font-weight: 300;
`;

export const StyledParagraph = styled.p`
    color: ${(props) => props.theme?.palette?.text?.primary};
    font-family: Helvetica, Arial, sans-serif;
    display: flex;
    flex-direction: center;
    text-align: left;
    padding-top: 2em;
    padding-bottom: 1em;
    margin: 0;
    font-size: 1.2em;

    @media (max-width: 834px) {
        padding: 4.5em 4.25em 4.25em;
    }
    @media (max-width: 500px) {
        padding: 4.5em 0em 4.25em 0em;
    }
`;
