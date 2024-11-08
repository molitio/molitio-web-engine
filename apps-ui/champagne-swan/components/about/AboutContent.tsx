import React from 'react';
import { SystemContext } from '@molitio/ui-core';
import { IconGroup, StyledContactContentPanelWaterSplash } from '../common';
import { ContactInfo } from '../contact';
import {
    StyledAboutContent,
    StyledAboutContentPanel,
    StyledAboutContentPanelQuotes,
    StyledAboutContentPanelImage,
    StyledAboutContentPanelImageAndEffect,
    StyledAboutContentPanelText,
    StyledAboutContentQuote,
    StyledAboutContentQuoteAuthor,
    StyledAboutContentPanelTitle,
    StyledAboutContentImagePanel,
} from './style';
import { useLineBreakParser } from '../utils';

const AboutContent: React.FC = () => {
    const systemContext = React.useContext(SystemContext);
    const aboutLeafs = systemContext?.contentRoot?.about?.leafs;
    const brandMessageTextContent = aboutLeafs?.brandMessage?.textContent;
    const brandMessageAssetUrls = aboutLeafs?.brandMessage?.assetUrls;
    const commonLeafs = systemContext?.contentRoot?.common?.leafs;
    const commonAssetUrls = commonLeafs?.images?.assetUrls;

    return (
        <StyledAboutContent>
            <StyledAboutContentPanel>
                <IconGroup fill={systemContext?.theme?.palette?.stars?.gold} starCount={5} />
                <StyledAboutContentPanelTitle>
                    {useLineBreakParser(brandMessageTextContent?.title ?? '')}
                </StyledAboutContentPanelTitle>
                <StyledAboutContentPanelQuotes>
                    <StyledAboutContentQuote>{brandMessageTextContent?.aboutQuote}</StyledAboutContentQuote>
                    <StyledAboutContentQuoteAuthor>
                        {brandMessageTextContent?.aboutQuoteAuthor ?? ''}
                    </StyledAboutContentQuoteAuthor>
                </StyledAboutContentPanelQuotes>
                <StyledAboutContentPanelText>{brandMessageTextContent?.introduction ?? ''}</StyledAboutContentPanelText>
                <StyledAboutContentPanelText>{brandMessageTextContent?.companyInfo ?? ''}</StyledAboutContentPanelText>
                <StyledAboutContentPanelText>
                    {brandMessageTextContent?.serviceDescirption ?? ''}
                </StyledAboutContentPanelText>
                <StyledAboutContentPanelText>
                    {brandMessageTextContent?.qualityStatement ?? ''}
                </StyledAboutContentPanelText>
                <StyledAboutContentPanelText>{brandMessageTextContent?.kapcsolat ?? ''}</StyledAboutContentPanelText>
                <StyledAboutContentImagePanel>
                    <StyledAboutContentPanelImageAndEffect>
                        <StyledAboutContentPanelImage
                            src={brandMessageAssetUrls?.mop ?? ''}
                            alt={'cleaner-moping'}
                            /*             fill={true}
                            sizes={`(max-width: ${resolveThemeBreakPointValues(systemContext?.theme, 'xl')}) 50vw,
                33vw`} */
                        />
                    </StyledAboutContentPanelImageAndEffect>
                    <StyledAboutContentPanelImageAndEffect>
                        <StyledAboutContentPanelImage
                            src={brandMessageAssetUrls?.colleague ?? ''}
                            alt={'cleaner-with-a-vacum'}
                            /*                     fill={true}
                            sizes={`(max-width: ${resolveThemeBreakPointValues(systemContext?.theme, 'xl')}) 50vw,
                33vw`} */
                        />
                    </StyledAboutContentPanelImageAndEffect>
                    <StyledAboutContentPanelImageAndEffect>
                        <StyledContactContentPanelWaterSplash
                            src={commonAssetUrls?.waterSplash ?? ''}
                            alt={'water-splash'}
                            width={160}
                            height={160}
                        />
                        <StyledAboutContentPanelImage
                            src={brandMessageAssetUrls?.machine ?? ''}
                            alt={'cleaning-machine'}
                            /*                 fill={true}
                            sizes={`(max-width: ${resolveThemeBreakPointValues(systemContext?.theme, 'xl')}) 50vw,
                33vw`} */
                        />
                    </StyledAboutContentPanelImageAndEffect>
                </StyledAboutContentImagePanel>
            </StyledAboutContentPanel>
            <ContactInfo />
        </StyledAboutContent>
    );
};

export default AboutContent;
