'use client';

import React, { useState } from 'react';
// import '../styles/navigation-menu.css';
import { NavRoot } from '../types';

/**
 * Navigation Menu
 *
 * The portion of the NavBar that contains interactive menu elements as NavSegments
 *
 * @param {NavigationMenuProps} props
 */
type NavigationMenuProps = {
    navRoot?: NavRoot;
};

const NavigationMenu: React.FC<NavigationMenuProps> = (props) => {
    const { navRoot = {} } = props;

    return (
        <div className="dev-outline">
            {Object.keys(navRoot).map((navBranch) => (
                <div className="w-full flex items-center align-middle bg-base-100 shadow-xl ">
                    <figure className="flex-none w-2/4 h-full">
                        <img
                            src={navRoot[navBranch].iconUrl}
                            alt={navRoot[navBranch].iconAlt}
                            className="object-cover w-full h-full"
                        />
                    </figure>
                    <div className="flex-grow p-4">
                        <>{navRoot[navBranch].label}</>
                        <h2 className="card-title"> {'label'}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NavigationMenu;
