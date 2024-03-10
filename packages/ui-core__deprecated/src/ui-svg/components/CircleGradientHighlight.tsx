import React from 'react';
import { ThemeContext } from 'styled-components';
import { CircleGradientHighlightSVG } from '../styles';
import { SvgCommonProps } from '../types';
import EmbededHtml from './EmbededHtml';

const CircleGradientHighlight: React.FC<SvgCommonProps & React.PropsWithChildren> = (props) => {
    const { dimensions, children } = props;

    const theme = React.useContext(ThemeContext);

    return (
        <CircleGradientHighlightSVG
            dimensions={dimensions}
            id="highlight-circle-gradient"
            preserveAspectRatio="xMidYMid slice"
            width="800pt"
            height="800pt"
            version="1.1"
            viewBox="0 0 800 800"
            /*  viewBox="0 0 600 800" */
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/2000/xlink"
        >
            <defs id="gradient-defs">
                <radialGradient id="gradient-fill" cx="400" cy="400" r="420" gradientUnits="userSpaceOnUse">
                    <stop
                        id="gradient-stop-0"
                        stopColor={theme?.palette?.background?.default ?? 'green'}
                        stopOpacity=".0"
                        offset="0"
                    />
                    {/*  <stop id="gradient-stop-1" stopColor="cyan" stop-opacity=".9" offset="42%" /> */}
                    <stop
                        id="gradient-stop-2"
                        stopColor={theme?.palette?.background?.secondary ?? 'blue'}
                        stopOpacity=".9"
                        offset="100%"
                    />
                </radialGradient>
            </defs>
            <g id="rect-0">
                <rect
                    id="playg"
                    paintOrder="markers fill stroke"
                    x="0"
                    y="0"
                    width="800"
                    height="800"
                    fill="url(#gradient-fill)"
                    opacity=".5"
                />
            </g>
            <g>
                <EmbededHtml x="200" y="200" width="400" height="400">
                    {children}
                </EmbededHtml>
            </g>
        </CircleGradientHighlightSVG>
    );
};

export default CircleGradientHighlight;
