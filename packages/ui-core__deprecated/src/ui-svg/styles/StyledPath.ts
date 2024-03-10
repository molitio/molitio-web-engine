import styled from 'styled-components';
import { SvgCommonProps } from '../types';

type PatternFillPathProps = {
    fill?: string;
    strokeWidth?: number;
    stroke?: string;
};

export const PatternFillPath = styled.path<PatternFillPathProps>`
    :hover {
        fill: ${(props) => props.fill ?? 'transparent'};
        stroke-width: ${(props) => props.strokeWidth ?? 3};
        stroke: ${(props) => props.stroke ?? 'yellow'};
    }
`;

type PatternFillBackgroundSVGProps = {
    isBackground?: boolean;
};

export const PatternFillBackgroundSVG = styled.svg<SvgCommonProps & PatternFillBackgroundSVGProps>`
    top: 0;
    left: 0;
    pointer-events: auto;
    position: ${(props) => (props.dimensions === 'FULLSCREEN' || props.isBackground ? 'fixed' : 'relative')};
    height: ${(props) =>
        props.dimensions === 'FULLSCREEN' || props.isBackground ? '100vh' : props.dimensions?.height};
    width: ${(props) => (props.dimensions === 'FULLSCREEN' || props.isBackground ? '100vw' : props.dimensions?.width)};
    z-index: ${(props) => props.isBackground && -99};
    opacity: ${(props) => props.opacity && 1};
`;
