import React from 'react';
import { ThemeContext } from 'styled-components';
import { AudioPlayerContext } from '../../ui-media';
import { PlayButtonCircleSVG, PlayButtonControlGroupSVG, PlayButtonSVG, ToggledVisibilityGroupSVG } from '../styles';
import { SvgCommonProps } from '../types';

const PlayButton: React.FC<SvgCommonProps> = (props) => {
    const playerContext = React.useContext(AudioPlayerContext);

    const theme = React.useContext(ThemeContext);

    const togglePlayPause = () => {
        //playerContext.setIsPlaying(!playerContext.isPlaying);
    };

    return (
        <PlayButtonSVG
            {...props}
            id="ctrl-play"
            onClick={togglePlayPause}
            version="1.1"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/2000/xlink"
        >
            <PlayButtonControlGroupSVG id="ctrl-play-circle-g">
                <PlayButtonCircleSVG id="ctrl-play-circle" cx="50" cy="50" r="48" />
            </PlayButtonControlGroupSVG>
            <ToggledVisibilityGroupSVG id="ctrl-play-triangle-g" isVisible={!playerContext.isPlaying}>
                <polygon
                    id="ctrl-play-triangle"
                    fill={theme?.palette?.secondary?.main}
                    stroke={theme?.palette?.secondary?.main}
                    points="42,34 68,50 42,66"
                    strokeLinejoin="round"
                    strokeOpacity="1"
                    strokeWidth="5"
                />
            </ToggledVisibilityGroupSVG>

            <ToggledVisibilityGroupSVG id="ctrl-pause-path-g" isVisible={playerContext.isPlaying}>
                <path
                    id="ctrl-pause-path-1"
                    fill={theme?.palette?.secondary?.main ?? 'none'}
                    stroke={theme?.palette?.secondary?.main ?? '#000000'}
                    strokeOpacity="1"
                    strokeDasharray="none"
                    strokeMiterlimit="4"
                    strokeLinejoin="miter"
                    strokeLinecap="round"
                    strokeWidth="10"
                    d="m 42,30 v 40"
                />
                <path
                    id="ctrl-pause-path-2"
                    fill={theme?.palette?.secondary?.main ?? 'none'}
                    stroke={theme?.palette?.secondary?.main ?? '#000000'}
                    strokeOpacity="1"
                    strokeDasharray="none"
                    strokeMiterlimit="4"
                    strokeLinejoin="miter"
                    strokeLinecap="round"
                    strokeWidth="10"
                    d="m 58,30 v 40"
                />
            </ToggledVisibilityGroupSVG>
        </PlayButtonSVG>
    );
};

export default PlayButton;
