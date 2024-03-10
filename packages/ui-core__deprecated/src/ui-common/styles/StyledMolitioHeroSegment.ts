import styled from 'styled-components';
import { TextAlignTypes } from '../../ui-layout';
import { Dimensions } from '../types';

export const StyledHeroSegment = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    text-align: center;
    bottom: 0;
`;

export const StyledHeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    overflow: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

type StyledHeroContentProps = {
    containerInnerPaddingTop?: string;
};
export const StyledHeroContent = styled.div<StyledHeroContentProps>`
    top: ${(props) => props?.containerInnerPaddingTop ?? '9em'};
    position: relative;
    width: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: top;
    flex-direction: column;
    z-index: 900;
    @media (max-height: 1334px) {
        top: calc(${(props) => props?.containerInnerPaddingTop ?? '9em'} - 1.2em);
    }
`;

type StyledLayerSegmentProps = {
    imageUrl?: string;
};

export const StyledLayerSegment = styled.div<StyledLayerSegmentProps>`
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    width: 100%;
    min-height: 100vh;
    background: url(${(props) => props?.imageUrl ?? ''});
    background-size: cover;
    z-index: 100;
    opacity: 1;
`;

export const Video = styled.video`
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    min-height: 100vh;
    object-fit: cover;
    transform: scale(1.6);
    z-index: -1;

    @media (min-width: 1644px) {
        transform: scale(1.5);
    }
    @media (max-width: 850px) {
        transform: scale(1.2);
    }
    @media (max-width: 688px) {
        transform: scale(2);
        object-position: right -19.8em bottom 0;
    }
`;

type StyledHeroTitleProps = {
    fontSize?: string;
    textShadow?: string;
    fontWeight?: string;
};
export const StyledHeroTitle = styled.h1<StyledHeroTitleProps>`
    position: relative;
    font-size: ${(props) => props?.fontSize ?? '3.3rem'};
    font-weight: ${(props) => props?.fontWeight ?? 'bold'};
    text-shadow: ${(props) => props?.textShadow ?? '3px 3px 3px black'};

    @media (max-width: 850px) {
        font-size: ${(props) => props?.fontSize ?? '3.3rem'};
        font-size: calc(${(props) => props?.fontSize ?? '3.3rem'} - 0.5rem);
    }

    @media (max-width: 530px) {
        font-size: calc(${(props) => props?.fontSize ?? '3.3rem'} - 1.2rem);
    }

    @media (max-width: 400px) {
        font-size: calc(${(props) => props?.fontSize ?? '3.3rem'} - 1.5rem);
    }
`;

type StyledHeroTextContentProps = {
    fontSize?: string;
    fontWeight?: string;
    textShadow?: string;
    textAlign?: TextAlignTypes;
    marginTop?: string;
    dimensions?: Dimensions;
};

export const StyledHeroTextContent = styled.p<StyledHeroTextContentProps>`
    max-width: ${(props) => props?.dimensions?.maxWidth};
    word-break: break-word;
    font-size: ${(props) => props?.fontSize ?? '1.6rem'};
    font-weight: ${(props) => props?.fontWeight ?? 'normal'};
    text-align: ${(props) => props?.textAlign ?? 'justify'};
    text-shadow: ${(props) => props?.textShadow ?? '2px 2px 2px black'};
    margin: ${(props) => props?.marginTop ?? '2.5em'} 0 0 0;
    @media (max-width: 850px) {
        font-size: calc(${(props) => props?.fontSize ?? '1.6em'} - 0.3rem);
        max-width: calc(${(props) => props?.dimensions?.maxWidth ?? '24em'} - 4em);
    }
    @media (max-width: 530px) {
        font-size: calc(${(props) => props?.fontSize ?? '1.6em'} - 0.5rem);
        max-width: calc(${(props) => props?.dimensions?.maxWidth ?? '24em'} - 4em);
    }
    ${(props) => {
        return { ...props?.dimensions };
    }};
`;

export const StyledContentHorizontalLine = styled.hr`
    position: relative;
    color: ${(props) => props?.theme?.palette?.text?.primary};
    width: 200px;
    margin-top: 7em;
    margin-bottom: 2.5em;
    box-shadow: 3px 3px 3px black;
    @media (max-width: 400px) {
        display: none;
    }
`;
