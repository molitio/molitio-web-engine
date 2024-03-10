import styled from 'styled-components';

export const StyledAbout = styled.div`
    position: relative;
`;

export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: ${(props) => props.theme?.dimensions?.page?.height};
    width: 50vw;
    background-color: ${(props) => props.theme?.palette?.background?.default};

    @media (max-width: 834px) {
        width: 100%;
    }
`;

export const StyledTitle = styled.h1`
    padding: 1em 0 1em 1.5em;
    font-size: 3rem;
    @media (max-width: 834px) {
        padding: 2em 0 1em 1.5em;
        margin-bottom: 0;
    }
`;

export const StyledTextContainer = styled.div`
    text-align: center;
    padding: 0 0 0 4.375em;
    width: 72%;
`;

export const StyledText = styled.p`
    text-align: start;
    font-family: Helvetica, arial, sans-serif;
    font-size: 1.3em;
`;

export const StyledLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 20px;
    padding-top: 1.5em;
`;

export const StyledAboutImage = styled.div`
    object-fit: fill;
    background: url(https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/img/grindingmachine.jpg);
    background-size: cover;
    background-position: center;
    width: 100%;
`;
