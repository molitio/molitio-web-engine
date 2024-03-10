import styled from 'styled-components';
import { SvgCommonProps } from '../types';

export const StripesSVG = styled.svg<SvgCommonProps>`
    top: 0;
    left: 0;
    height: ${(props) => (props.dimensions === 'FULLSCREEN' ? '100vh' : props.dimensions?.height)};
    width: ${(props) => (props.dimensions === 'FULLSCREEN' ? '100vw' : props.dimensions?.width)};
    pointer-events: auto;
`;
