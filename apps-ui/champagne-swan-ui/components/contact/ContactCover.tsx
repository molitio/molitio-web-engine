import React from 'react';
import { SystemContext } from '@molitio/ui-core';
import { StyledLinearGradient, StyledCoverContent } from '../common';
import {
    StyledContactCoverTitle,
    StyledContact,
    StyledCOntactCoverDescription,
    StyledAboutContentCoverImage,
} from './style';

const ContactCover: React.FC = () => {
    const systemContext = React.useContext(SystemContext);
    const contactLeafs = systemContext?.contentRoot?.contact?.leafs;
    const textContent = contactLeafs?.contactInfo?.textContent;
    const assetUrls = contactLeafs?.contactInfo?.assetUrls;

    return (
        <StyledContact>
            <StyledAboutContentCoverImage
                src={assetUrls?.skyScraper ?? ''}
                alt={'sky-scraper'}
                /*   fill={true}
                sizes={`(max-width: ${resolveThemeBreakPointValues(systemContext?.theme, 'xl')}) 50vw,
                33vw`} */
            />
            <StyledLinearGradient
                direction="bottom"
                variation="contactCoverTop"
                positioning={{ position: 'absolute', top: '0' }}
                visual={{ opacity: 1 }}
            />
            <StyledLinearGradient
                direction="top"
                variation="contactCoverBottom"
                positioning={{ position: 'absolute', top: '0' }}
                visual={{ opacity: 1 }}
            />
            <StyledCoverContent>
                <StyledContactCoverTitle>{textContent?.title ?? ''}</StyledContactCoverTitle>
                <StyledCOntactCoverDescription>{textContent?.formText ?? ''}</StyledCOntactCoverDescription>
            </StyledCoverContent>
        </StyledContact>
    );
};

export default ContactCover;
