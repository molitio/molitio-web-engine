'use client';

import React, { useState } from 'react';
import { DefaultApplicationContextRoot, NavRoot } from '../../context';
import '../styles/navbar.css';

const NavMenu: React.FC = () => {
    const navRoot: NavRoot = DefaultApplicationContextRoot['navRoot'];
    const [selectedNavItem, setSelectedNavItem] = useState<string | null>(null);

    const handleNavItemClick = (navBranch: string) => {
        setSelectedNavItem(navBranch);
    };

    return (
        <nav className="navbar ">
            <div className="nav-menu flex">
                {Object.keys(navRoot).map((navBranch) => (
                    <div
                        key={navBranch}
                        className={`nav-item flex align-center ${selectedNavItem === navBranch ? 'selected' : ''}`}
                        onClick={() => handleNavItemClick(navBranch)}
                    >
                        <figure className="icon-container flex justify-center">
                            <img
                                src={navRoot[navBranch].iconUrl}
                                className="icon"
                            />
                        </figure>
                        <span className="label">{navRoot[navBranch].label}</span>
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default NavMenu;

