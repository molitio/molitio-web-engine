import React from 'react';
import { SystemContext } from '../../ui-common';
import {
    StyledAbout,
    StyledAboutImage,
    StyledContent,
    StyledTitle,
    StyledTextContainer,
    StyledText,
    StyledLogo,
} from '../styles';

type AboutPageProps = {
    externalTitle?: string;
    externalAboutText?: string;
    externalAboutImageUrl?: string;
};

const AboutPage: React.FC<AboutPageProps> = (props) => {
    const { externalTitle, externalAboutText, externalAboutImageUrl } = props;
    const systemContext = React.useContext(SystemContext);
    const aboutLeafs = systemContext?.contentRoot?.about?.leafs;
    const textContent = aboutLeafs?.aboutHero?.textContent;
    const assetUrls = aboutLeafs?.aboutHero?.assetUrls;

    return (
        <StyledAbout>
            <StyledAboutImage>
                <StyledContent>
                    <StyledTitle>{externalTitle ? externalTitle : textContent?.title}</StyledTitle>
                    <StyledTextContainer>
                        <StyledText>{externalAboutText ? externalAboutText : textContent?.aboutText}</StyledText>
                    </StyledTextContainer>
                    <StyledLogo>
                        <img
                            src={externalAboutImageUrl ? externalAboutImageUrl : assetUrls?.aboutImage}
                            alt="logo"
                            width={100}
                            height={100}
                        />
                    </StyledLogo>
                </StyledContent>
            </StyledAboutImage>
        </StyledAbout>
    );
};

export default AboutPage;
