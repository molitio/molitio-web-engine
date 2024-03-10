import styled from 'styled-components';
import { ShapeDimensions } from '../types';

type StyledCircleGradientHighlightSvgProps = {
    dimensions?: ShapeDimensions | 'FULLSCREEN';
};

export const CircleGradientHighlightSVG = styled.svg<StyledCircleGradientHighlightSvgProps>`
    pointer-events: none;
    position: ${(props) => (props.dimensions === 'FULLSCREEN' ? 'fixed' : 'relative')};
    height: ${(props) => (props.dimensions === 'FULLSCREEN' ? '100vh' : props.dimensions?.height)};
    width: ${(props) => (props.dimensions === 'FULLSCREEN' ? '100vw' : props.dimensions?.width)};
`;
