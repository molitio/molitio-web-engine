import styled, { css } from 'styled-components';
import { NavSegmentParams } from '../types';

export const StyledNavSegmentItemText = styled.a`
    color: ${(props) => props.theme?.palette?.primary?.main};
`;

export const StyledNavSegmentUl = styled.ul`
    list-style-type: none;
`;

export const StyledNavSegmentListItem = styled.li`
    & a {
        float: left;
        text-align: center;
        padding: 30px 20px;
        text-decoration: none;
        font-size: 27px;
        font-family: Roboto, sans-serif;
    }
`;

export const StyledNavSegment = styled.li<NavSegmentParams>`
    display: ${(props) => (props.visible ? 'inherit' : 'none')};
    flex: ${(props) => props.flex};
    font-family: Roboto, sans-serif;
    padding: ${(props) => props.padding};
    font-size: ${(props) => props.fontSize};
    width: ${(props) => props.width ?? 'inherit'};
    height: ${(props) => props.height ?? 'inherit'};
    min-width: ${(props) => props.minWidth};
    min-height: ${(props) => props.minHeight};
    ${(props) =>
        props.color
            ? css`
                  color: ${props?.color};
              `
            : css`
                  color: ${props.theme?.palette?.text?.primary};
              `};

    @media screen and (max-width: 830px) {
        ${(props) =>
            props.backgroundColor
                ? css`
                      background-color: ${props.backgroundColor};
                  `
                : css`
                      background-color: ${props.theme?.palette?.background?.default};
                  `};
    }

    ${(props) =>
        props.centered
            ? css`
                  align-self: center;
                  justify-content: center;
              `
            : css`
                  align-self: start;
                  justify-content: flex-start;
              `}
`;
