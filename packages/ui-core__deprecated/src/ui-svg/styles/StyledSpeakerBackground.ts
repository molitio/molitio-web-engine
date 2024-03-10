import styled from 'styled-components';
import { SvgCommonProps } from '../types';

export const SpeakerBackgroundSVG = styled.svg<SvgCommonProps>`
    height: ${(props) => (props?.dimensions === 'FULLSCREEN' ? '100%' : props?.dimensions?.height ?? '100%')};
    width: ${(props) => (props?.dimensions === 'FULLSCREEN' ? '100%' : props.dimensions?.width ?? '100%')};
    pointer-events: none;
`;
