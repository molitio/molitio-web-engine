import React from 'react';
import { StyledLinkUndecorated, SystemContext } from '../../ui-common';
import { usePlatform } from '../../ui-platform';
import { CloseIcon, MenuIcon } from '../../ui-svg';
import {
    StyledMolitioNavContactInfoContainer,
    StyledMolitioNavContactInfo,
    StyledMolitioNavContainer,
    StyledMolitioNavExtendedContainer,
    StyledMolitioNavFixed,
    /*  StyledMolitioNavHorizontalLine, */
    StyledMolitioNavImageContainer,
    StyledMolitioNavInnerContainer,
    StyledMolitioNavLeftContainer,
    StyledMolitioNavLogoImage,
    StyledMolitioNavOpenLinksButtonContainer,
    StyledMolitioNavRightContainer,
} from '../styles';

type MolitioNavBarProps = {
    navHeight?: string;
    contactProps?: {
        logoImageUrl?: string;
        email?: string;
        emailHref?: string;
        phoneMain?: string;
        phoneMainHref?: string;
        phoneSecondary?: string;
        phoneSecondaryHref?: string;
        webSite?: string;
        webSiteHref?: string;
        address?: string;
        github?: string;
        githubHref?: string;
        contactInfoTextShadow?: string;
    };
};

const MolitioNavBar: React.FC<MolitioNavBarProps> = (props) => {
    const { navHeight, contactProps } = props;

    const navRef = React.useRef(null);

    const [navColapsed, setNavColapsed] = React.useState(true);

    const { isClient } = usePlatform();

    const handleScroll = (event: any) => {
        event.preventDefault();
    };

    React.useEffect(() => {
        if (isClient()) {
            const handleScroll = () => {
                if (navRef.current) {
                    if (window.scrollY > 0) {
                        setNavColapsed(true);
                    } else {
                        setNavColapsed(false);
                    }
                }
            };
            window.addEventListener('scroll', handleScroll);
        }
    }, [navRef]);

    const {
        logoImageUrl,
        email,
        emailHref,
        phoneMain,
        phoneMainHref,
        phoneSecondary,
        phoneSecondaryHref,
        webSite,
        webSiteHref,
        address,
        github,
        githubHref,
        contactInfoTextShadow,
    } = contactProps ?? {};

    const systemContext = React.useContext(SystemContext);
    const setNavBarExpanded = systemContext.interactive?.navBar?.toggleExpanded;
    const navBarExpanded = systemContext.interactive?.navBar.isExpanded;
    const navBarLeafs = systemContext.contentRoot?.nav?.leafs;
    const textContent = navBarLeafs?.contacts?.textContent;
    const assetUrls = navBarLeafs?.contacts?.assetUrls;

    return (
        <StyledMolitioNavFixed onScroll={handleScroll} navCollapsed={navColapsed} navHeight={navHeight}>
            <StyledMolitioNavContainer>
                <StyledMolitioNavInnerContainer>
                    <StyledMolitioNavImageContainer>
                        <StyledLinkUndecorated href={'#home'}>
                            <StyledMolitioNavLogoImage
                                src={logoImageUrl ? logoImageUrl : assetUrls?.logoImage}
                                alt="logo"
                                aria-label="logo"
                            />
                        </StyledLinkUndecorated>
                    </StyledMolitioNavImageContainer>
                    <StyledMolitioNavLeftContainer>
                        <StyledMolitioNavOpenLinksButtonContainer
                            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                                e.preventDefault();
                                setNavBarExpanded?.(!navBarExpanded);
                            }}
                        >
                            {navBarExpanded ? <CloseIcon /> : <MenuIcon />}
                        </StyledMolitioNavOpenLinksButtonContainer>
                    </StyledMolitioNavLeftContainer>
                    <StyledMolitioNavRightContainer />
                </StyledMolitioNavInnerContainer>
                <StyledMolitioNavExtendedContainer>
                    {navBarExpanded ? (
                        <StyledMolitioNavContactInfoContainer>
                            <StyledMolitioNavContactInfo
                                type="email"
                                aria-label="email"
                                target="_blank"
                                textShadow={contactInfoTextShadow}
                                href={emailHref ? emailHref : assetUrls?.emailHref}
                            >{`${email ? email : textContent?.email ?? ''}`}</StyledMolitioNavContactInfo>
                            <StyledMolitioNavContactInfo
                                type="tel"
                                aria-label="phone main"
                                target="_blank"
                                textShadow={contactInfoTextShadow}
                                href={phoneMainHref ? phoneMainHref : assetUrls?.phoneMainHref}
                            >{`${phoneMain ? phoneMain : textContent?.phoneMain ?? ''}`}</StyledMolitioNavContactInfo>
                            <StyledMolitioNavContactInfo
                                type="tel"
                                aria-label="phone secondary"
                                target="_blank"
                                textShadow={contactInfoTextShadow}
                                href={phoneSecondaryHref ? phoneSecondaryHref : assetUrls?.phoneSecondaryHref ?? ''}
                            >{`${
                                phoneSecondary ? phoneSecondary : textContent?.phoneSecondary ?? ''
                            }`}</StyledMolitioNavContactInfo>
                            <StyledMolitioNavContactInfo
                                target="_blank"
                                aria-label="web site url"
                                textShadow={contactInfoTextShadow}
                                href={webSiteHref ? webSiteHref : assetUrls?.webSiteHref}
                            >
                                {`${webSite ? webSite : textContent?.webSite ?? ''}`}
                            </StyledMolitioNavContactInfo>
                            <StyledMolitioNavContactInfo
                                target="_blank"
                                aria-label="github url"
                                textShadow={contactInfoTextShadow}
                                href={githubHref ? githubHref : assetUrls?.githubHref}
                            >
                                {`${github ? github : textContent?.github ?? ''}`}
                            </StyledMolitioNavContactInfo>
                            <StyledMolitioNavContactInfo
                                target="_blank"
                                type="address"
                                aria-label="address"
                                textShadow={contactInfoTextShadow}
                                href={address ? address : assetUrls?.addressHref}
                            >
                                {`${address ? address : textContent?.address ?? ''}`}
                            </StyledMolitioNavContactInfo>
                        </StyledMolitioNavContactInfoContainer>
                    ) : (
                        ''
                    )}
                </StyledMolitioNavExtendedContainer>
            </StyledMolitioNavContainer>
        </StyledMolitioNavFixed>
    );
};

export default MolitioNavBar;
