import { SystemContext } from '@molitio/ui-core';
import React from 'react';
import { StyledLinearGradient, IconGroup } from '../common';
import {
    StyledOpinions,
    StyledOpinionText,
    StyledOpinionTitle,
    StyledOpinionsPanel,
    StyledOpinionsLogoContainer,
    StyledOpinionsMainTitle,
    StyledOpinionsIconContainer,
    StyledOpinionsLogoImage,
} from './style';

const Opinions: React.FC = () => {
    const systemContext = React.useContext(SystemContext);
    const opinionLeafs = systemContext?.contentRoot?.opinions?.leafs;
    const textContent = opinionLeafs?.customerOpinions?.textContent;
    const commonLeafs = systemContext?.contentRoot?.common?.leafs;
    const commonAssetUrls = commonLeafs?.images?.assetUrls;

    return (
        <StyledOpinions>
            <StyledLinearGradient
                direction="top"
                variation="reversePartial"
                positioning={{ position: 'absolute', top: '0px' }}
                visual={{ opacity: 1 }}
            />
            <StyledLinearGradient
                direction="top"
                variation="partial"
                positioning={{ position: 'absolute', top: '0px' }}
                visual={{ opacity: 1 }}
            />

            <StyledOpinionsIconContainer>
                <IconGroup fill={systemContext?.theme?.palette?.stars?.gold} starCount={5} />
            </StyledOpinionsIconContainer>

            <StyledOpinionsMainTitle>{textContent?.title ?? ''}</StyledOpinionsMainTitle>

            <StyledOpinionsPanel>
                {/*         <StyledOpinionsAvatarImageContainer>
          <StyledOpinionsAvatarImage
            src={commonAssetUrls?.stockPersonAvatar1 ?? ""}
            alt={"person-avatar"}
            fill={true}
          />
        </StyledOpinionsAvatarImageContainer> */}
                <StyledOpinionText>{textContent?.defaultCostumerOpinion ?? ''}</StyledOpinionText>
                <StyledOpinionTitle>{textContent?.defaultCustomerName ?? ''}</StyledOpinionTitle>
            </StyledOpinionsPanel>

            <StyledOpinionsLogoContainer>
                <StyledOpinionsLogoImage src={commonAssetUrls?.logo ?? ''} alt={'logo'} fill={true} />
            </StyledOpinionsLogoContainer>
        </StyledOpinions>
    );
};

export default Opinions;
