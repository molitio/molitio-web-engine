import React from 'react';
import StarSvgIcon from './StarSvgIcon';
import { StyledIconContainer } from './style';
import { SystemContext } from '@molitio/ui-core';

type IconGroupProps = {
    fill?: string;
    dx?: string;
    dy?: string;
    stdDeviation?: string;
    floodOpacity?: string;
    starCount: number;
};

export const IconGroup: React.FC<IconGroupProps> = (props) => {
    const context = React.useContext(SystemContext);
    const { fill, dx, dy, stdDeviation, floodOpacity, starCount } = props;

    return (
        <StyledIconContainer>
            {Array.from({ length: starCount }).map((_, i) => (
                <StarSvgIcon
                    fill={fill ?? context?.theme?.palette?.secondary?.main ?? ''}
                    dx={dx ?? '0'}
                    dy={dy ?? '25'}
                    stdDeviation={stdDeviation ?? '0'}
                    floodOpacity={floodOpacity ?? '0'}
                    key={i}
                />
            ))}
        </StyledIconContainer>
    );
};

export default IconGroup;
