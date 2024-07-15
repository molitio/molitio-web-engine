'use client';

import React, { useState } from 'react';
import { DefaultApplicationContextRoot, NavRoot, initNavMenuStore, navMenuAtomRW } from '../../context';
import '../styles/navbar.css';
import { useAtom } from 'jotai';

const NavMenu: React.FC = () => {
    //TODO: remove this mocked when jotai state is available
    const navRootD: NavRoot = DefaultApplicationContextRoot['navRoot'];
    initNavMenuStore(navRootD);

    const [navRoot] = useAtom(navMenuAtomRW);
    const [selectedNavItem, setSelectedNavItem] = useState<string | null>(null);

    const handleNavItemClick = (navBranch: string) => {
        setSelectedNavItem(navBranch);
    };

    return (
        <nav className="navbar">
            <div className="nav-menu flex">
                {Object.keys(navRoot).map((navBranch) => (
                    <a key={navBranch} href={`${navRoot[navBranch].path}`}>
                        <div
                            key={navBranch}
                            className={`nav-item flex align-center ${selectedNavItem === navBranch ? 'selected' : ''}`}
                            onClick={() => handleNavItemClick(navBranch)}
                        >
                            <figure className="icon-container flex justify-center">
                                <img src={navRoot[navBranch].iconUrl} className="icon" />
                            </figure>
                            <span className="label hidden md:inline-block">{navRoot[navBranch].label}</span>
                        </div>
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default NavMenu;
