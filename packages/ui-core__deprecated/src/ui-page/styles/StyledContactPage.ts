import styled from 'styled-components';

export const StyledContact = styled.div`
    height: auto;
    position: relative;
    display: flex;
    justify-content: center;
    min-height: ${(props) => props.theme?.dimensions?.page?.height};
`;

export const StyledContactContent = styled.div`
    height: max-content;
    position: relative;
    width: 50vw;
    margin-left: 50vw;
    background-color: ${(props) => props.theme?.palette?.background?.default};
    min-height: ${(props) => props.theme?.dimensions?.page?.height};
    @media (max-width: 834px) {
        margin-left: 0;
        width: 100%;
    }
`;

export const StyledContactForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledContactTitle = styled.h1`
    text-align: center;
    padding: 3em 0em 2em 0em;
    font-size: 3rem;
    margin: 0;

    @media (max-width: 834px) {
        padding: 3em 0em 2em 0em;
    }
`;

export const StyledContactContainer = styled.div`
    margin: 0;
`;

type StyledContactImageProps = {
    backgrounImageUrl?: string;
};
export const StyledContactImage = styled.div<StyledContactImageProps>`
    position: relative;
    object-fit: fill;
    background: url(${(props) => props?.backgrounImageUrl});
    background-size: cover;
    background-position: center;
    width: 100%;
`;

export const StyledInlineTextNumbers = styled.p`
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 1.8rem;
    margin-left: 0.5em;
    @media (max-width: 400px) {
        font-size: 1.5rem;
    }
`;

export const StyledInlineText = styled.p`
    color: ${(props) => props.theme?.palette?.text?.primary};
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 200;
    font-size: 1.1rem;
    margin-left: 1em;
    @media (max-width: 400px) {
        font-size: 0.91em;
    }
`;

export const StyledContactInfoIcon = styled.img`
    width: 50px;
    height: 50px;
`;

export const StyledContactInfoIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledContactLogo = styled.img`
    margin: 4em 0 2em 0;
    width: 100px;
    height: 100px;
`;

export const StyledContactInfoAnchor = styled.a`
    font-size: large;
    font-family: Helvetica, Arial, sans-serif;
    color: ${(props) => props.theme?.palette?.text?.primary};
`;

export const StyledInlineTextAddress = styled.p`
    color: ${(props) => props.theme?.palette?.text?.primary};
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.2rem;
    margin-left: 1em;
    margin-bottom: 0;

    @media (max-width: 400px) {
        font-size: 0.99em;
    }
`;
