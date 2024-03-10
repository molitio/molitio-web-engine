import React from 'react';
import { StyledButton, StyledButtonContainer, StyledIconImage, StyledLinkUndecorated } from '../styles';

import { Dimensions, HeroIconColors, HeroIconType, IconDefinitions } from '../types';
type IconProps = {
    isActive?: boolean;
    iconDefinitons: IconDefinitions;
    iconBorderRadius?: string;
    iconDimensions?: Dimensions;
    heroIconType?: HeroIconType;
    heroIconColors?: HeroIconColors;
};

const Icon: React.FC<IconProps & React.HTMLAttributes<HTMLButtonElement>> = (props) => {
    const {
        isActive = false,
        iconDefinitons,
        onMouseEnter,
        iconBorderRadius,
        heroIconColors,
        heroIconType,
        iconDimensions,
    } = props;

    return (
        <StyledButtonContainer
            dimensions={iconDimensions}
            heroIconType={heroIconType}
            iconBorderRadius={iconBorderRadius}
        >
            <StyledLinkUndecorated target="_blank" href={iconDefinitons?.hrefUrl}>
                <StyledButton
                    onMouseEnter={onMouseEnter}
                    type="button"
                    isActive={isActive}
                    heroIconType={heroIconType}
                    heroIconColors={heroIconColors}
                    iconBorderRadius={iconBorderRadius}
                >
                    <StyledIconImage
                        src={iconDefinitons.url}
                        iconBorderRadius={iconBorderRadius}
                        heroIconType={heroIconType}
                        isActive={isActive}
                        heroIconColors={heroIconColors}
                    />
                </StyledButton>
            </StyledLinkUndecorated>
        </StyledButtonContainer>
    );
};

export default Icon;
