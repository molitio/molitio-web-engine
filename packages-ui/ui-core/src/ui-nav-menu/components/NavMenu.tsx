'use client';

import React from 'react';
import { useAtom } from 'jotai';
import { DefaultApplicationContextRoot, NavRoot, navMenuAtomRW } from '../../context';

/**
 * Navigation Menu
 *
 * The portion of the NavBar that contains interactive menu elements as NavSegments
 *
 */

const NavMenu: React.FC = () => {
    //const [navRoot] = useAtom(navMenuAtomRW);
    const navRoot: NavRoot = DefaultApplicationContextRoot['navRoot'];

    return (
        <div className="dev-outline flex">
            {Object.keys(navRoot).map((navBranch) => (
                <div key={navBranch} className="w-full flex items-center align-middle bg-base-100 shadow-xl ">
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

export default NavMenu;
