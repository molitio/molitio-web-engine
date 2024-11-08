import React from 'react';
import { AppContext } from '../context';
import { CloseIcon, MenuIcon } from '../common';
import {
    StyledNavBar,
    StyledNavLink,
    StyledNavLinksContainer,
    StyledNavButton,
    StyledNavBarLogoImage,
    StyledNavBarLogoImageContainer,
    StyledNavBarLogo,
} from './style';

import { SystemContext } from '@molitio/ui-core';

const NavBar: React.FC = () => {
    const champagneSwanContext = React.useContext(AppContext);
    const navBarExpanded = champagneSwanContext?.interactive?.navBarExpanded;
    const setNavBarExpanded = champagneSwanContext.interactive.setNavBarExpanded;

    const systemContext = React.useContext(SystemContext);
    const navTree = systemContext?.navRoot ?? {};
    const commonLeafs = systemContext?.contentRoot?.common?.leafs;
    const commonAssetUrls = commonLeafs?.images?.assetUrls;

    return (
        <StyledNavBar navBarExpanded={champagneSwanContext?.interactive?.navBarExpanded}>
            <StyledNavBarLogo>
                <StyledNavBarLogoImageContainer>
                    <StyledNavBarLogoImage
                        src={commonAssetUrls?.horizontalLogo ?? ''}
                        alt={'logo'}
                        width={224}
                        height={192}
                        /*            placeholder={'empty'}
                        sizes={`(max-width: ${resolveThemeBreakPointValues(systemContext?.theme, 'xl')}) 50vw,
                33vw`} */
                    />
                </StyledNavBarLogoImageContainer>
            </StyledNavBarLogo>

            <StyledNavLinksContainer navBarExpanded={champagneSwanContext?.interactive?.navBarExpanded}>
                {navTree
                    ? Object.keys(navTree).map((branch) => (
                          <StyledNavLink
                              key={branch}
                              href={navTree[branch]?.path}
                              className="nav-text"
                              onClick={() => {
                                  if (champagneSwanContext?.interactive?.navBarExpanded) setNavBarExpanded?.(false);
                              }}
                          >
                              {`${navTree[branch].label}`}
                          </StyledNavLink>
                      ))
                    : null}
            </StyledNavLinksContainer>
            <StyledNavButton
                navBarExpanded={champagneSwanContext?.interactive?.navBarExpanded}
                onClick={() => {
                    setNavBarExpanded?.(!champagneSwanContext?.interactive?.navBarExpanded);
                }}
            >
                {navBarExpanded ? <CloseIcon /> : <MenuIcon />}
            </StyledNavButton>
        </StyledNavBar>
    );
};

export default NavBar;
