import React from 'react';
import { Stripes } from '../../ui-svg';
import { BackgroundContainer } from '../styles';

export type StripedBackgroundProps = {
    backgroundEffectSrc: string;
    highlightStripes?: boolean;
};

const StripedBackground: React.FC<StripedBackgroundProps> = (props) => {
    const { backgroundEffectSrc, highlightStripes } = props;

    return (
        <BackgroundContainer>
            <Stripes
                dimensions={'FULLSCREEN'}
                embededImageSrc={backgroundEffectSrc}
                highlightStripes={highlightStripes}
            />
        </BackgroundContainer>
    );
};

export default StripedBackground;
