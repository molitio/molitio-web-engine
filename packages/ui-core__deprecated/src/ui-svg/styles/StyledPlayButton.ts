import styled from 'styled-components';
import { SvgCommonProps } from '../types';

export const PlayButtonSVG = styled.svg<SvgCommonProps>`
    height: ${(props) => (props?.dimensions === 'FULLSCREEN' ? '100%' : props?.dimensions?.height ?? '100%')};
    width: ${(props) => (props?.dimensions === 'FULLSCREEN' ? '100%' : props.dimensions?.width ?? '100%')};
    pointer-events: none;
`;

export const PlayButtonControlGroupSVG = styled.g`
    pointer-events: auto;
    cursor: pointer;
`;

type ToggledVisibilityGroupSVGProps = {
    isVisible: boolean;
};

export const ToggledVisibilityGroupSVG = styled.g<ToggledVisibilityGroupSVGProps>`
    visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
`;

export const PlayButtonCircleSVG = styled.circle`
    stroke: #0b0b0a;
    stroke-width: 1;
    fill: #f6c339;
`;
