import React from 'react';
import { NavElementCollection } from '../types';
import NavElement from './NavElement';
import NavMenuControl from './NavMenuControl';
import { useAtom } from 'jotai';
import { navMenuAtomRW } from '../../context';

export type NavMenuProps = {
    navElementCollection: NavElementCollection;
};

export const NavMenu: React.FC<NavMenuProps> = (props) => {
    const { navElementCollection } = props;
    const [navMenuOpenState, setNavMenuOpenState] = useAtom(navMenuAtomRW);

    const handleToggleMenu = () => {
        console.log('handleToggleMenu');
        setNavMenuOpenState({
            navMenuOpen: !navMenuOpenState.navMenuOpen,
        });
    };

    return (
        <div className="flex items-stretch">
            <NavMenuControl onClick={handleToggleMenu} />
            <div className="dropdown dropdown-end">
                <ul className={` md:hidden menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4`}>
                    {Object.keys(navElementCollection.navElements).map((key) => (
                        <NavElement key={key} elementData={navElementCollection.navElements[key]} />
                    ))}
                </ul>
                {/*       <ul className="md:flex hidden z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                    {Object.keys(navElementCollection.navElements).map((key) => (
                        <NavElement key={key} elementData={navElementCollection.navElements[key]} />
                    ))}
                </ul> */}
            </div>
        </div>
    );
};

export default NavMenu;
