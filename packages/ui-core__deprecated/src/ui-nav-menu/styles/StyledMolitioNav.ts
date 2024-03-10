import styled from 'styled-components';

export const StyledMolitioNavImageContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: 5em;
    @media (max-width: 576px) {
        margin-left: 1.4em;
    }
`;

type StyledMolitioNavFixed = {
    navCollapsed?: boolean;
    navHeight?: string;
};

export const StyledMolitioNavFixed = styled.nav<StyledMolitioNavFixed>`
    top: -2em;
    position: fixed;
    z-index: 9000;
    width: 100vw;
    height: ${(props) => props?.navHeight ?? '5em'};
    @media (max-height: 1334px) {
        max-height: calc(${(props) => props?.navHeight ?? '5em'} - 1.2em);
    }
    @media (max-width: 576px) {
        top: -1.3em;
    }
`;

export const StyledMolitioNavContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    z-index: 1;
`;

export const StyledMolitioNavLeftContainer = styled.div`
    display: flex;
    flex: 100%;
    align-items: center;
    margin-right: 3em;
    margin-top: -1em;
    justify-content: flex-end;
`;

export const StyledMolitioNavRightContainer = styled.div`
    flex: 0%;
    display: flex;
    justify-content: flex-end;
`;

export const StyledMolitioNavInnerContainer = styled.div`
    width: 100%;
    display: flex;
`;

export const StyledMolitioNavExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 9px;
`;

export const StyledMolitioNavOpenLinksButtonContainer = styled.div`
    cursor: pointer;
    margin-top: 0.2em;
    margin-left: 1.2em;
    position: absolute;
`;

export const StyledMolitioNavContactInfoContainer = styled.div`
    position: relative;
    font-weight: 100;
    text-align: center;
    top: 2em;
`;

export const StyledMolitioNavLogoImage = styled.img`
    width: 150px;
    @media (max-width: 992px) {
        width: 160px;
    }
    @media (max-width: 576px) {
        width: 120px;
    }
`;

type StyledMolitioNavContactInfoProps = {
    textShadow?: string;
};

export const StyledMolitioNavContactInfo = styled.a<StyledMolitioNavContactInfoProps>`
    display: block;
    font-size: 3rem;
    text-decoration: none;
    margin-top: 1.6em;
    word-break: break-word;
    color: ${(props) => props.theme?.palette?.text?.primary};
    text-shadow: ${(props) => props?.textShadow ?? '2px 2px 2px black'};
    @media (max-width: 992px) {
        font-size: 2.2rem;
    }
    @media (max-width: 576px) {
        font-size: 1.4rem;
    }
`;

export const StyledMolitioNavHorizontalLine = styled.hr<StyledMolitioNavContactInfoProps>`
    color: red;
    width: 200px;
    box-shadow: ${(props) => props?.textShadow ?? '2px 2px 2px black'};
    @media (max-width: 400px) {
        display: none;
    }
`;
