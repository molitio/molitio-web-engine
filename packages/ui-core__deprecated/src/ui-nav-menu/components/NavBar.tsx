import React, { useState } from 'react';
import { SystemContext } from '../../ui-common';
import { CloseIcon, MenuIcon } from '../../ui-svg';
import {
    StyledNavContactInfo,
    StyledNavContactInfoContainer,
    StyledNavExtendedContainer,
    StyledNavFixed,
    StyledNavImageContainer,
    StyledNavInnerContainer,
    StyledNavLeftContainer,
    StyledNavLink,
    StyledNavLinkContainer,
    StyledNavLinkExtended,
    StyledNavOpenLinksButton,
    StyledNavRightContainer,
    StyledNavStyledImage,
} from '../styles';

export type NavBarProps = {
    height?: string;

    contactProps?: {
        logoImageUrl?: string;
        email?: string;
        address?: string;
        emailHref?: string;
        phoneMain?: string;
        phoneMainHref?: string;
        phoneSecondary?: string;
        phoneSecondaryHref?: string;
        webSite?: string;
        webSiteHref?: string;
        github?: string;
        githubHref?: string;
    };
};

const NavBar: React.FC<NavBarProps> = (props) => {
    const { height, contactProps } = props;

    const { logoImageUrl, email, address, emailHref, phoneMain, phoneMainHref, phoneSecondary, phoneSecondaryHref } =
        contactProps ?? {};

    const systemContext = React.useContext(SystemContext);
    const [extendNavBar, setExtendNavBar] = useState(false);

    const contactLeafs = systemContext?.contentRoot?.contact?.leafs;
    const textContent = contactLeafs?.contactInfo?.textContent;
    const assetUrls = contactLeafs?.contactInfo?.assetUrls;

    return (
        <StyledNavFixed height={height} extendNavBar={extendNavBar}>
            <StyledNavOpenLinksButton
                onClick={() => {
                    setExtendNavBar((curr) => !curr);
                }}
            >
                {extendNavBar ? <CloseIcon /> : <MenuIcon />}
            </StyledNavOpenLinksButton>
            <StyledNavInnerContainer>
                <StyledNavLeftContainer>
                    <StyledNavImageContainer>
                        <a key={systemContext?.navRoot?.home.path} href={systemContext?.navRoot?.home?.path ?? '/'}>
                            <StyledNavStyledImage src={logoImageUrl ? logoImageUrl : assetUrls?.logo} alt="logo" />
                        </a>
                    </StyledNavImageContainer>
                </StyledNavLeftContainer>
                <StyledNavRightContainer>
                    <StyledNavLinkContainer>
                        {systemContext?.navRoot
                            ? Object.keys(systemContext.navRoot).map((branch) => (
                                  <StyledNavLink key={branch} href={systemContext?.navRoot?.[branch]?.path ?? ''}>
                                      {`${systemContext?.navRoot?.[branch]?.label}`}
                                  </StyledNavLink>
                              ))
                            : null}
                    </StyledNavLinkContainer>
                </StyledNavRightContainer>
            </StyledNavInnerContainer>
            <StyledNavExtendedContainer>
                {systemContext?.navRoot && extendNavBar
                    ? Object.keys(systemContext.navRoot).map((branch) => (
                          <StyledNavLinkExtended
                              onClick={() => {
                                  setExtendNavBar((curr) => !curr);
                              }}
                              key={branch}
                              href={systemContext?.navRoot?.[branch]?.path}
                          >
                              {`${systemContext?.navRoot?.[branch]?.label}`}
                          </StyledNavLinkExtended>
                      ))
                    : null}
                {extendNavBar ? (
                    <StyledNavContactInfoContainer>
                        <StyledNavContactInfo
                            type="tel"
                            aria-label="phone main"
                            target="_blank"
                            href={phoneMainHref ? phoneMainHref : assetUrls?.phoneMainHref}
                        >
                            {phoneMain ? phoneMain : textContent?.phoneMain ?? ''}
                        </StyledNavContactInfo>
                        <StyledNavContactInfo
                            type="tel"
                            aria-label="phone secondary"
                            target="_blank"
                            href={phoneSecondaryHref ? phoneSecondaryHref : assetUrls?.phoneSecondaryHref ?? ''}
                        >
                            {phoneSecondary ? phoneSecondary : textContent?.phoneSecondary ?? ''}
                        </StyledNavContactInfo>
                        <StyledNavContactInfo
                            type="email"
                            aria-label="email"
                            target="_blank"
                            href={emailHref ? emailHref : assetUrls?.emailHref}
                        >
                            {email ? email : textContent?.email ?? ''}
                        </StyledNavContactInfo>
                        <StyledNavContactInfo aria-label="address">
                            {address ? address : textContent?.address ?? ''}
                        </StyledNavContactInfo>
                    </StyledNavContactInfoContainer>
                ) : (
                    ''
                )}
            </StyledNavExtendedContainer>
        </StyledNavFixed>
    );
};

export default NavBar;
