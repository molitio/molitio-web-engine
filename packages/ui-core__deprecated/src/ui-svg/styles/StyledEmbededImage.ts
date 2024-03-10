import styled from 'styled-components';
import { SvgCommonProps } from '../types';

export const EmbededImageSVG = styled.image<SvgCommonProps>`
    opacity: ${(props) => props.opacity ?? '1'};
    pointer-events: none;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;
