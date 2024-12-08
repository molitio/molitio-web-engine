import React from 'react';
import { SystemContext } from '@molitio/ui-core';
import { IconGroup, StyledLinearGradient, StyledCoverContent } from '.';
import { useLineBreakParser } from '../utils';
import {
    StyledAppCoverContactLink,
    StyledAppCoverButtonContainer,
    StyledAppCoverDescription,
    StyledAppCover,
    StyledAppCoverMainTitle,
    StyledAppCoverImage,
    StyledButtonWaterSplashContainer,
    StyledWaterSplash,
} from './style';

const AppCover: React.FC = () => {
    const systemContext = React.useContext(SystemContext);
    const navTree = systemContext?.navRoot ?? {};

    const heroLeafs = systemContext?.contentRoot?.home?.leafs;
    const textContent = heroLeafs?.hero?.textContent;
    const assetUrls = heroLeafs?.hero?.assetUrls;

    const commonLeafs = systemContext?.contentRoot?.common?.leafs;
    const commonAssetUrls = commonLeafs?.images?.assetUrls;

    return (
        <StyledAppCover>
            <StyledAppCoverImage
                src={assetUrls?.heroBackground ?? ''}
                alt={'cover-image'}
                /*     fill={true}
                sizes={`(max-width: ${resolveThemeBreakPointValues(systemContext?.theme, 'xl')}) 50vw,
            33vw`} */
            />
            <StyledLinearGradient
                direction="bottom"
                variation="appCoverBottom"
                positioning={{ position: 'absolute', top: '0px' }}
                visual={{ opacity: 1 }}
            />
            <StyledLinearGradient
                direction="top"
                variation="appCoverTop"
                positioning={{ position: 'absolute', top: '0px' }}
                visual={{ opacity: 1 }}
            />
            <StyledCoverContent>
                <IconGroup fill={systemContext?.theme?.palette?.stars?.gold ?? ''} starCount={5} />
                <StyledAppCoverMainTitle>{textContent?.title ?? ''}</StyledAppCoverMainTitle>
                <StyledAppCoverDescription>
                    {useLineBreakParser(textContent?.description ?? '')}
                </StyledAppCoverDescription>

                <StyledAppCoverButtonContainer>
                    <StyledButtonWaterSplashContainer>
                        <StyledWaterSplash
                            src={commonAssetUrls?.waterSplash ?? ''}
                            alt={'water-splash'}
                            /*         fill={true}
                            sizes={`(max-width: ${resolveThemeBreakPointValues(systemContext?.theme, 'xl')}) 50vw,
              33vw`} */
                        />
                    </StyledButtonWaterSplashContainer>

                    <StyledAppCoverContactLink key={navTree?.about?.path ?? ''} href={navTree?.about?.path ?? ''}>
                        {textContent?.moreInfoButton ?? ''}
                    </StyledAppCoverContactLink>
                </StyledAppCoverButtonContainer>
            </StyledCoverContent>
        </StyledAppCover>
    );
};

export default AppCover;
