import React from 'react';
import { SystemContext } from '../../ui-common';
import {
    StyledIntroAbout,
    StyledLeaderImage,
    StyledImageLayer,
    StyledIntroductionContent,
    StyledSignatureText,
    StyledParagraph,
} from '../styles';

type IntroductionPageProps = {
    externalText?: string;
    externalSignatureText?: string;
    externalImageUrl?: string;
};

const IntroductionPage: React.FC<IntroductionPageProps> = (props) => {
    const { externalText, externalSignatureText, externalImageUrl } = props;
    const systemContext = React.useContext(SystemContext);
    const introductionLeafs = systemContext?.contentRoot?.introduction?.leafs;
    const textContent = introductionLeafs?.introduction?.textContent;
    const assetUrls = introductionLeafs?.introduction?.assetUrls;

    return (
        <StyledIntroAbout>
            <StyledLeaderImage src={externalImageUrl ? externalImageUrl : assetUrls?.introductionImageUrl} />
            <StyledImageLayer>
                <StyledIntroductionContent>
                    <StyledParagraph>{externalText ? externalText : textContent?.introductionText}</StyledParagraph>
                    <StyledSignatureText>
                        {externalSignatureText ? externalSignatureText : textContent?.signatureText}
                    </StyledSignatureText>
                </StyledIntroductionContent>
            </StyledImageLayer>
        </StyledIntroAbout>
    );
};

export default IntroductionPage;
