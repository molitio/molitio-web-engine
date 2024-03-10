import React from 'react';
import { PatternFillBackgroundSVG, PatternFillPath } from '../styles';
import { SvgCommonProps } from '../types';

type PatternFillProps = SvgCommonProps & {
    isBackground?: boolean;
    patternStroke?: string;
    patternStrokeWidth?: number;
    rotateDegrees?: number;
    fillColor?: string;
};

const PatternFill: React.FC<PatternFillProps> = (props) => {
    return (
        <PatternFillBackgroundSVG
            {...props}
            id="pattern-fill-svg"
            preserveAspectRatio="xMidYMid slice"
            width="1920pt"
            height="1080pt"
            version="1.1"
            viewBox="0 0 1920 1080"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs id="stripeDefs">
                <pattern
                    id="stripePattern"
                    width="100"
                    height="100"
                    patternUnits="userSpaceOnUse"
                    patternTransform={`rotate(${props.rotateDegrees ?? -45})`}
                >
                    <PatternFillPath
                        id="stripePath"
                        d="M 0,0 L 0,100"
                        stroke={props.patternStroke ?? 'black'}
                        strokeWidth={props.patternStrokeWidth ?? 100}
                    />
                </pattern>
            </defs>
            <g id="pattern-fill-rect-g">
                <rect id="pattern-fill-rect" width="1920" height="1080" fill="url(#stripePattern)" />
            </g>
        </PatternFillBackgroundSVG>
    );
};

export default PatternFill;
