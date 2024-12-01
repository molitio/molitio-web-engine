import React from 'react';
import { SystemContext } from '@molitio/ui-core';
import {
    StyledPartners,
    StyledPartnersTitle,
    StyledPartnersPanel,
    StyledPartnersPanelItem,
    StyledPartnersImage,
    StyledPartnersImageContainer,
} from './style';

const Partners: React.FC = () => {
    const systemContext = React.useContext(SystemContext);
    const partnersLeafs = systemContext?.contentRoot?.partners?.leafs;
    const textContent = partnersLeafs?.cover?.textContent;
    const assetUrls = partnersLeafs?.cover?.assetUrls;

    return (
        <StyledPartners>
            <StyledPartnersTitle>{textContent?.title ?? ''}</StyledPartnersTitle>
            <StyledPartnersPanel>
                <StyledPartnersPanelItem>
                    <StyledPartnersImageContainer>
                        <StyledPartnersImage src={assetUrls?.mLogo ?? ''} alt={'m-logo'} /*  fill={true}  */ />
                    </StyledPartnersImageContainer>
                </StyledPartnersPanelItem>
                <StyledPartnersPanelItem>
                    <StyledPartnersImageContainer>
                        <StyledPartnersImage src={assetUrls?.houseLogo ?? ''} alt={'house-logo'} /*  fill={true} */ />
                    </StyledPartnersImageContainer>
                </StyledPartnersPanelItem>
                <StyledPartnersPanelItem>
                    <StyledPartnersImageContainer>
                        <StyledPartnersImage src={assetUrls?.brandLogo ?? ''} alt={'brand-logo'} /* fill={true}  */ />
                    </StyledPartnersImageContainer>
                </StyledPartnersPanelItem>
                <StyledPartnersPanelItem>
                    <StyledPartnersImageContainer>
                        <StyledPartnersImage
                            src={assetUrls?.officeLogo ?? ''}
                            alt={'office-logo'} /*  fill={true}  */
                        />
                    </StyledPartnersImageContainer>
                </StyledPartnersPanelItem>
            </StyledPartnersPanel>
        </StyledPartners>
    );
};

export default Partners;
