import styled from 'styled-components';

type StyledNavFixedProps = {
    height?: string;
    extendNavBar: boolean;
};

export const StyledNavFixed = styled.nav<StyledNavFixedProps>`
    background-color: ${(props) => props.theme?.palette?.primary?.main};
    position: fixed;
    z-index: 9000;
    width: 100vw;
    box-shadow: 1px 1px #88888847;
    width: 100%;
    height: ${(props) => (props.extendNavBar ? '100vh' : props?.height ?? '5em')};
    display: flex;
    flex-direction: column;
    @media (max-width: 834px) {
        border-bottom: 0px white solid;
    }
`;

export const StyledNavImageContainer = styled.div`
    width: 5em;
    height: 100%;
    margin-left: 35px;
    padding-top: 0.8em;
    @media screen and (max-width: 834px) {
        margin-left: 0px;
    }
`;

export const StyledNavLink = styled.a`
    color: ${(props) => props.theme?.palette?.text?.primary};
    text-decoration: none;
    font-family: Helvetica, Arial, sans-serif;
    margin: 1.8em 1em 0 0;
    font-size: large;
    font-weight: lighter;
    @media (max-width: 834px) {
        display: none;
    }
`;

export const StyledNavLinkExtended = styled.a`
    color: ${(props) => props.theme?.palette?.text?.primary};
    text-decoration: none;
    font-family: Helvetica, Arial, sans-serif;
    margin: 1.8em 1em 0 0;
    font-size: x-large;
    font-weight: lighter;
    @media (max-width: 850px) {
        margin: 1em 0 1em 0;
    }
`;

export const StyledNavLeftContainer = styled.div`
    display: flex;
    flex: 30%;
    align-items: center;
    @media (max-width: 834px) {
        flex: 100%;
        justify-content: center;
    }
`;

export const StyledNavRightContainer = styled.div`
    flex: 70%;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 834px) {
        flex: 0%;
        justify-content: center;
    }
`;

export const StyledNavLinkContainer = styled.div`
    display: flex;
    margin-right: 30px;
    @media (max-width: 834px) {
        margin-right: 0px;
    }
`;

export const StyledNavInnerContainer = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
`;

export const StyledNavExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 9px;
    height: ${(props) => props.theme?.dimensions?.page?.height};
    @media (min-width: 834px) {
        display: none;
    }
    @media (max-width: 400px) {
        overflow: auto;
    }
`;

export const StyledNavOpenLinksButton = styled.button`
    margin-left: 1.1em;
    margin-top: 2.2em;
    background: none;
    border: none;
    color: ${(props) => props.theme?.palette?.text?.primary};
    cursor: pointer;
    position: absolute;
    @media (min-width: 834px) {
        display: none;
    }
`;

export const StyledNavContactInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: auto;
    margin-bottom: 3em;
`;

export const StyledNavStyledImage = styled.img``;

export const StyledNavContactInfo = styled.a`
    color: ${(props) => props.theme?.palette?.text?.primary};
    margin: 0.2em;
    text-decoration: none;
    font-family: Helvetica, Arial, sans-serif;
`;
