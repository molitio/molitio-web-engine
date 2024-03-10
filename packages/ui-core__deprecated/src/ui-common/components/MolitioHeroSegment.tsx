import React from 'react';
import { SystemContext } from '../context';
import {
    StyledContentHorizontalLine,
    StyledHeroContainer,
    StyledHeroTextContent,
    StyledHeroSegment,
    StyledHeroTitle,
    StyledLayerSegment,
    Video,
    StyledHeroContent,
} from '../styles';
import { BackgroundTypes, SegmentParams } from '../types';
import IconGroup from './IconGroup';

type MolitioHeroSegmentProps = {
    segmentParams?: SegmentParams;
    backgroundElement?: JSX.Element;
};

const MolitioHeroSegment: React.FC<MolitioHeroSegmentProps & React.PropsWithChildren> = (props) => {
    const { segmentParams, backgroundElement, children } = props;

    const {
        pageName,
        title,
        titleFontSize,
        titleTextShadow,
        titleFontWeight,
        description,
        descriptionTextAlign,
        descriptionTextShadow,
        descriptionTextFontWeight,
        descriptionTextDimensions,
        desciptionSubText,
        descriptionSubTextAlign,
        descriptionSubTextDimensions,
        backgroundType = 'video',
        backgroundUrl,
        iconBorderRadius,
        heroIconType,
        heroIconColors,
        disableLineDecorator,
        innerPaddingTop,
        effectLayerUrl,
    } = segmentParams ?? { pageName: 'home' };

    const systemContext = React.useContext(SystemContext);
    const heroLeafs = systemContext?.contentRoot?.[pageName ?? '']?.leafs;
    const textContent = heroLeafs?.hero?.textContent;
    const assetUrls = heroLeafs?.hero?.assetUrls;
    const iconDefinitions = heroLeafs?.hero?.iconDefinitions;
    const navBarExpanded = systemContext?.interactive?.navBar?.isExpanded;

    const resolveBackground = (backgroundType: BackgroundTypes) => {
        switch (backgroundType) {
            case 'video':
                return (
                    <Video autoPlay loop muted src={backgroundUrl ? backgroundUrl : assetUrls?.heroBackground ?? ''} />
                );

            default:
                return backgroundElement;
        }
    };

    return (
        <StyledHeroSegment>
            {!navBarExpanded ? (
                <StyledHeroContainer>
                    {children ? (
                        children
                    ) : (
                        <StyledHeroContent containerInnerPaddingTop={innerPaddingTop}>
                            {disableLineDecorator ? null : <StyledContentHorizontalLine />}
                            <StyledHeroTitle
                                fontSize={titleFontSize}
                                textShadow={titleTextShadow}
                                fontWeight={titleFontWeight}
                            >
                                {title ? title : textContent?.title}
                            </StyledHeroTitle>
                            <StyledHeroTextContent
                                fontSize="1.6rem"
                                marginTop="1.2em"
                                fontWeight={descriptionTextFontWeight}
                                textAlign={descriptionTextAlign}
                                textShadow={descriptionTextShadow}
                                dimensions={descriptionTextDimensions}
                            >
                                {description ? description : textContent?.description}
                            </StyledHeroTextContent>
                            <StyledHeroTextContent
                                fontSize="1.2rem"
                                marginTop="1.4em"
                                fontWeight={descriptionTextFontWeight}
                                textAlign={descriptionSubTextAlign}
                                textShadow={descriptionTextShadow}
                                dimensions={descriptionSubTextDimensions}
                            >
                                {desciptionSubText ? desciptionSubText : textContent?.desciptionSubText}
                            </StyledHeroTextContent>
                            <IconGroup
                                heroIconDimensions={{ width: '3.3rem', height: '3.3rem' }}
                                iconDefinitions={iconDefinitions ?? {}}
                                iconBorderRadius={iconBorderRadius}
                                heroIconType={heroIconType}
                                heroIconColors={heroIconColors}
                                innerPaddingTop={'3em'}
                            />
                        </StyledHeroContent>
                    )}
                </StyledHeroContainer>
            ) : null}
            {resolveBackground(backgroundType)}
            <StyledLayerSegment imageUrl={effectLayerUrl ? effectLayerUrl : assetUrls?.effectLayer} />
        </StyledHeroSegment>
    );
};

export default MolitioHeroSegment;
