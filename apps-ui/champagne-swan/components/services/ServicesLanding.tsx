import React from 'react';
import { SystemContext } from '@molitio/ui-core';
import { IconGroup, StyledLinearGradient, StyledServicesLandingPanelImageWaterSplash } from '../common';
import {
    StyledServicesLanding,
    StyledServicesLandingMainTitle,
    StyledServicesLandingPanel,
    StyledServicesLandingPanelContent,
    StyledContactLink,
    StyledServicesContentBoxTitle,
    StyledServicesContentBoxText,
    StyledServicesIconContainer,
    StyledServicesLandingPanelImageContainer,
    StyledServicesLandingPanelImageAndEffect,
    StyledServicesLandingPanelImage,
} from './style';
import { resolveThemeBreakPointValues } from '../utils';

const ServicesLanding: React.FC = () => {
    const systemContext = React.useContext(SystemContext);
    const navTree = systemContext?.navRoot ?? {};
    const navLeafs = navTree?.services?.leafs;
    const commonLeafs = systemContext?.contentRoot?.common?.leafs;
    const servicesLeafs = systemContext?.contentRoot?.services?.leafs;
    const textContent = servicesLeafs?.home?.textContent;
    const assetUrls = servicesLeafs?.home?.assetUrls;
    const commonAssetUrls = commonLeafs?.images?.assetUrls;

    return (
        <StyledServicesLanding>
            <StyledLinearGradient
                direction="top"
                variation="landingServicesContent"
                visual={{ opacity: 1 }}
                positioning={{ position: 'absolute', top: '0px' }}
            />

            <StyledLinearGradient
                direction="bottom"
                variation="landingServicesContent"
                visual={{ opacity: 1 }}
                positioning={{ position: 'absolute', bottom: '0px' }}
            />
            <StyledServicesIconContainer>
                <IconGroup fill={systemContext?.theme?.palette?.stars?.gold} starCount={5} />
            </StyledServicesIconContainer>
            <StyledServicesLandingMainTitle>{textContent?.title ?? ''}</StyledServicesLandingMainTitle>

            <StyledServicesLandingPanel>
                <StyledServicesLandingPanelContent>
                    <StyledServicesContentBoxTitle>
                        {textContent?.comercialServicesContentTitle ?? ''}
                    </StyledServicesContentBoxTitle>
                    <StyledServicesContentBoxText>
                        {textContent?.comercialServicesContentText ?? ''}
                    </StyledServicesContentBoxText>
                    <StyledContactLink href={navLeafs?.mainContent?.path ?? ''}>
                        {navLeafs?.mainContent?.label ?? ''}
                    </StyledContactLink>
                </StyledServicesLandingPanelContent>

                <StyledServicesLandingPanelImageContainer>
                    <StyledServicesLandingPanelImageAndEffect>
                        <StyledServicesLandingPanelImageWaterSplash
                            src={commonAssetUrls?.waterSplash ?? ''}
                            alt={'water-splash'}
                            width={240}
                            height={240}
                        />
                        <StyledServicesLandingPanelImage
                            id={'office-cleaners'}
                            sizes={`(max-width: ${resolveThemeBreakPointValues(systemContext?.theme, 'xl')}) 50vw,
                33vw`}
                            src={assetUrls?.morning ?? ''}
                            alt={'morning-sunshine'}
                            fill={true}
                        />
                    </StyledServicesLandingPanelImageAndEffect>
                </StyledServicesLandingPanelImageContainer>
            </StyledServicesLandingPanel>

            <StyledServicesLandingPanel reversed>
                <StyledServicesLandingPanelContent>
                    <StyledServicesContentBoxTitle>
                        {textContent?.privateServicesContentTitle ?? ''}
                    </StyledServicesContentBoxTitle>
                    <StyledServicesContentBoxText>
                        {textContent?.privateServicesContentText ?? ''}
                    </StyledServicesContentBoxText>
                    <StyledContactLink href={navLeafs?.privateServices?.path ?? ''}>
                        {navLeafs?.privateServices?.label ?? ''}
                    </StyledContactLink>
                </StyledServicesLandingPanelContent>
                <StyledServicesLandingPanelImageContainer>
                    <StyledServicesLandingPanelImageAndEffect>
                        <StyledServicesLandingPanelImageWaterSplash
                            src={commonAssetUrls?.waterSplash ?? ''}
                            alt={'water-splash'}
                            width={240}
                            height={240}
                        />
                        <StyledServicesLandingPanelImage
                            id={'office-cleaners'}
                            sizes={`(max-width: ${resolveThemeBreakPointValues(systemContext?.theme, 'xl')}) 50vw,
                33vw`}
                            src={assetUrls?.flatRoom ?? ''}
                            alt={'flat-room'}
                            fill={true}
                        />
                    </StyledServicesLandingPanelImageAndEffect>
                </StyledServicesLandingPanelImageContainer>
            </StyledServicesLandingPanel>
            <StyledServicesLandingPanel>
                <StyledServicesLandingPanelContent>
                    <StyledServicesContentBoxTitle>
                        {textContent?.highCeilingContentTitle ?? ''}
                    </StyledServicesContentBoxTitle>
                    <StyledServicesContentBoxText>
                        {textContent?.highCeilingContentText ?? ''}
                    </StyledServicesContentBoxText>
                    <StyledContactLink href={navLeafs?.highCeilingServices?.path ?? ''}>
                        {navLeafs?.highCeilingServices?.label ?? ''}
                    </StyledContactLink>
                </StyledServicesLandingPanelContent>
                <StyledServicesLandingPanelImageContainer>
                    <StyledServicesLandingPanelImageAndEffect>
                        <StyledServicesLandingPanelImageWaterSplash
                            src={commonAssetUrls?.waterSplash ?? ''}
                            alt={'water-splash'}
                            width={240}
                            height={240}
                        />
                        <StyledServicesLandingPanelImage
                            id={'office-cleaners'}
                            sizes={`(max-width: ${resolveThemeBreakPointValues(systemContext?.theme, 'xl')}) 50vw,
                33vw`}
                            src={assetUrls?.industry ?? ''}
                            alt={'industry-park'}
                            fill={true}
                        />
                    </StyledServicesLandingPanelImageAndEffect>
                </StyledServicesLandingPanelImageContainer>
            </StyledServicesLandingPanel>
        </StyledServicesLanding>
    );
};

export default ServicesLanding;
