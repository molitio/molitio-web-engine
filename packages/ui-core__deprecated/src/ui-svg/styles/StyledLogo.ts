import styled from 'styled-components';
import { SvgCommonProps } from '../types';

export const LogoSVG = styled.svg<SvgCommonProps>`
    height: ${(props) => (props.dimensions === 'FULLSCREEN' ? '100%' : props.dimensions?.height)};
    width: ${(props) => (props.dimensions === 'FULLSCREEN' ? '100%' : props.dimensions?.width)};
    pointer-events: ${(props) => (props.linkUrl ? 'auto' : 'none')};
    cursor: ${(props) => (props.linkUrl ? 'pointer' : 'none')};
    opacity: ${(props) => props.opacity ?? '1'};
`;
