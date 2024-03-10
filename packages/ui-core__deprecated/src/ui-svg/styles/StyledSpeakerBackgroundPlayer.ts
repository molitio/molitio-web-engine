import styled from 'styled-components';
import { SvgCommonProps } from '../types';

export const StyledSpeakerBackgroundPlayerSVG = styled.svg<SvgCommonProps>`
    height: ${(props) => (props.dimensions === 'FULLSCREEN' ? '100%' : props.dimensions?.height)};
    width: ${(props) => (props.dimensions === 'FULLSCREEN' ? '100%' : props.dimensions?.width)};
    pointer-events: none;
    position: relative;
    z-index: 60;
    @keyframes pulseLoad {
        0% {
            opacity: 0.4;
            stroke-width: 2;
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
        }

        70% {
            opacity: 0.8;
            stroke-width: 8;
            box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
        }

        100% {
            opacity: 1;
            stroke-width: 5;
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }
    }
`;

type PlayerButtonPolygonSVGProps = {
    togglePulse: boolean;
    isVisibile: boolean;
};

export const PlayerButtonPolygonSVG = styled.polygon<PlayerButtonPolygonSVGProps>`
    animation: ${(props) => (props.togglePulse ? '$pulseLoad 2s ease-in-out 0s infinite alternate' : '')};
    visibility: ${(props) => (props.isVisibile ? 'visible' : 'hidden')};
`;
