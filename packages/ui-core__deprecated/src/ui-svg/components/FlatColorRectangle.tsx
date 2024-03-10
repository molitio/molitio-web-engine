import React from 'react';
import { FlatColorRectangleSVG } from '../styles';

type FlatColorRectangleProps = {
    color?: string;
};
const FlatColorRectangle: React.FC<FlatColorRectangleProps> = (props) => {
    const { color } = props;

    return (
        <FlatColorRectangleSVG version="1.1" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
            <g>
                <rect
                    x="-7.1054e-15"
                    width="1920"
                    height="1080"
                    fill={color ?? '#2b2b2b'}
                    fillRule="evenodd"
                    strokeWidth="14.547"
                />
            </g>
        </FlatColorRectangleSVG>
    );
};

export default FlatColorRectangle;
