import React from 'react';
import { SystemContext } from '@molitio/ui-core';
import {
    StyledServicesCover,
    StyledServicesCoverMainTitle,
    StyledServicesCoverDescription,
    StyledServicesCoverButtonContainer,
    StyledServicesCoverImage,
    StyledServicesCoverContactLink,
} from './style';
import { StyledWaterSplash, StyledButtonWaterSplashContainer } from '../common';

import { StyledCoverContent, StyledLinearGradient } from '../common';

const ServicesCover: React.FC = () => {
    const systemContext = React.useContext(SystemContext);
    const commonLeafs = systemContext?.contentRoot?.common?.leafs;
    const servicesLeafs = systemContext?.contentRoot?.services?.leafs;
    const textContent = servicesLeafs?.cover?.textContent;
    const assetUrls = servicesLeafs?.cover?.assetUrls;
    const commonAssetUrls = commonLeafs?.images?.assetUrls;

    return (
        <StyledServicesCover>
            <StyledServicesCoverImage
                src={assetUrls?.window ?? ''}
                alt={'cover-image'}
                /*             fill={true}
                sizes={`(max-width: ${resolveThemeBreakPointValues(systemContext?.theme, 'xl')}) 50vw,
                33vw`} */
            />
            <StyledLinearGradient
                direction="bottom"
                variation="reversePartial"
                positioning={{ position: 'absolute', top: '0px' }}
                visual={{ opacity: 0.6 }}
            />
            <StyledLinearGradient
                direction="bottom"
                variation="partial"
                positioning={{ position: 'absolute', top: '0px' }}
                visual={{ opacity: 1 }}
            />

            <StyledCoverContent>
                <StyledServicesCoverMainTitle>{textContent?.title ?? ''}</StyledServicesCoverMainTitle>
                <StyledServicesCoverDescription>{textContent?.introText ?? ''}</StyledServicesCoverDescription>

                <StyledServicesCoverButtonContainer>
                    <StyledButtonWaterSplashContainer>
                        <StyledWaterSplash
                            src={commonAssetUrls?.waterSplash ?? ''}
                            alt={'water-splash'}
                            /*           fill={true}
                            sizes={`(max-width: ${resolveThemeBreakPointValues(systemContext?.theme, 'xl')}) 50vw,
              33vw`} */
                        />
                    </StyledButtonWaterSplashContainer>
                    <StyledServicesCoverContactLink key={assetUrls?.cover ?? ''} href={assetUrls?.cover ?? ''}>
                        {textContent?.introCta ?? ''}
                    </StyledServicesCoverContactLink>
                </StyledServicesCoverButtonContainer>
            </StyledCoverContent>
        </StyledServicesCover>
    );
};

export default ServicesCover;
