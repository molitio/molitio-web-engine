import React from 'react';
import HeroSegmentContent from './HeroSegmentContent';
import { SystemContext } from '../context';
import {
    StyledGreenBrickHeroSegment,
    StyledGreenBrickImg,
    StyledBox,
    GreenBricHeroSegmentContainer,
    StyledGreenBrickButton,
} from '../styles';

type HeroSegmentProps = {
    externalTitle?: string;
    externalDescription?: string;
    externalCallToActionText?: string;
    externalCallToActionLink?: string;
};

const HeroSegment: React.FC<HeroSegmentProps> = (props) => {
    const { externalTitle, externalDescription, externalCallToActionText, externalCallToActionLink } = props;
    const systemContext = React.useContext(SystemContext);
    const homeLeafs = systemContext?.contentRoot?.home?.leafs;
    const assetUrls = homeLeafs?.hero?.assetUrls;
    const textContent = homeLeafs?.hero?.textContent;
    const callToActionLink = externalCallToActionLink ? externalCallToActionLink : systemContext.navRoot?.contact?.path;

    return (
        <StyledGreenBrickHeroSegment>
            <StyledGreenBrickImg imageUrl={assetUrls?.heroImage ?? ''}>
                <StyledBox>
                    <GreenBricHeroSegmentContainer>
                        <HeroSegmentContent
                            title={externalTitle ? externalTitle : textContent?.title ?? ''}
                            description={externalDescription ? externalDescription : textContent?.description ?? ''}
                            callToAction={
                                <a key={callToActionLink} href={callToActionLink}>
                                    {externalCallToActionText ? (
                                        externalCallToActionText
                                    ) : textContent?.callToAction ? (
                                        <StyledGreenBrickButton id="call-to-action" aria-label="call-to-acction-button">
                                            {externalCallToActionText
                                                ? externalCallToActionText
                                                : textContent?.callToAction ?? ''}
                                        </StyledGreenBrickButton>
                                    ) : (
                                        ''
                                    )}
                                </a>
                            }
                        />
                    </GreenBricHeroSegmentContainer>
                </StyledBox>
            </StyledGreenBrickImg>
        </StyledGreenBrickHeroSegment>
    );
};

export default HeroSegment;
