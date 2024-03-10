import React from 'react';
import { IconsContainer } from '../styles';
import { Dimensions, HeroIconColors, HeroIconType, IconDefinitions } from '../types';
import Icon from './Icon';
type IconGroupProps = {
    activeIcon?: string;
    iconDefinitions: Record<string, IconDefinitions>;
    iconBorderRadius?: string;
    heroIconType?: HeroIconType;
    heroIconColors?: HeroIconColors;
    heroIconDimensions?: Dimensions;
    innerPaddingTop?: string;
};

const IconGroup: React.FC<IconGroupProps> = (props) => {
    const {
        iconDefinitions = {},
        activeIcon = Object.keys(iconDefinitions)[0],
        iconBorderRadius,
        heroIconColors,
        heroIconType,
        heroIconDimensions,
        innerPaddingTop,
    } = props;

    const [activatedIcon, setActivatedIcon] = React.useState(activeIcon);

    return (
        <IconsContainer itemCount={Object.keys(iconDefinitions).length} innerPaddingTop={innerPaddingTop}>
            {Object.keys(iconDefinitions).map((icon) => (
                <Icon
                    onMouseEnter={() => {
                        setActivatedIcon(icon);
                    }}
                    key={icon}
                    iconDefinitons={iconDefinitions[icon]}
                    isActive={icon === activatedIcon}
                    iconBorderRadius={iconBorderRadius}
                    heroIconType={heroIconType}
                    heroIconColors={heroIconColors}
                    iconDimensions={heroIconDimensions}
                />
            ))}
        </IconsContainer>
    );
};

export default IconGroup;
