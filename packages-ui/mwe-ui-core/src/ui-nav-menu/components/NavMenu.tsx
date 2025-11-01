import React from 'react';
/* import React, { useState } from 'react'; */
/* import { navMenuAtomRW } from '../../context'; */
/* import { useAtom } from 'jotai'; */

const NavMenu: React.FC = () => {
    /*     const [navRoot] = useAtom(navMenuAtomRW); */
    /*     const [selectedNavItem, setSelectedNavItem] = useState<string | null>(null); */

    /*     const handleNavItemClick = (navBranch: string) => {
        setSelectedNavItem(navBranch);
    }; */

    return (
        <nav>
            <div className="flex items-center gap-3 justify-center">
                {/*                 {Object.keys(navRoot).map((navBranch) => (
                    <a key={navBranch} href={`${navRoot[navBranch].path}`}>
                        <div
                            key={navBranch}
                            className={` nav-item flex align-center ${selectedNavItem === navBranch ? 'selected' : ''}`}
                            onClick={() => handleNavItemClick(navBranch)}
                        >
                            <figure className="icon-container flex justify-center">
                                <img src={navRoot[navBranch].iconUrl} className="icon" />
                            </figure>
                            <span className="label ">{navRoot[navBranch].label}</span> 
                        </div>
                    </a>
                ))}*/}
            </div>
        </nav>
    );
};

export default NavMenu;
