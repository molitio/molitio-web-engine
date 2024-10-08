import React from 'react';
import { StyledStarSvgIcon } from './style';

type StarIconProps = {
    fill: string;
    dx: string;
    dy: string;
    stdDeviation: string;
    floodOpacity: string;
};

const StarSvgIcon: React.FC<StarIconProps> = ({ fill, dx, dy, stdDeviation, floodOpacity }) => {
    return (
        <StyledStarSvgIcon fill={fill} id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
            <filter id="drop-shadow">
                <feDropShadow dx={dx} dy={dy} stdDeviation={stdDeviation} floodOpacity={floodOpacity} />
            </filter>
            <path
                d="m531.97,47.8l131.28,266c6.98,14.15,20.49,23.96,36.1,26.23l293.55,42.65c18.27,2.66,25.57,25.11,12.35,37.99l-212.41,207.05c-11.3,11.02-16.46,26.89-13.79,42.44l50.14,292.36c3.12,18.2-15.98,32.07-32.32,23.48l-262.56-138.03c-13.97-7.34-30.66-7.34-44.63,0l-262.56,138.03c-16.34,8.59-35.44-5.28-32.32-23.48l50.14-292.36c2.67-15.55-2.49-31.43-13.79-42.44L18.75,420.68c-13.22-12.89-5.93-35.34,12.35-37.99l293.55-42.65c15.62-2.27,29.12-12.08,36.1-26.23L492.03,47.8c8.17-16.56,31.78-16.56,39.95,0Z"
                filter="url(#drop-shadow)"
            />
        </StyledStarSvgIcon>
    );
};
export default StarSvgIcon;
