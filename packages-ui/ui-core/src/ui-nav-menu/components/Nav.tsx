import React from 'react';
import { NavBarProps } from './NavBar';
//import '../style/navbar.css';
/* import { useAtom } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';
import { navMenuAtom, navMenuAtomRW } from '../../context'; */

const Nav: React.FC<NavBarProps> = (props) => {
    const { logo } = props;
    /*  useHydrateAtoms([[navMenuAtom, navMenuAtom]]);
    const [navMenuOpenState, setNavMenuOpenState] = useAtom(navMenuAtomRW);

    const handleToggleMenu = () => {
        setNavMenuOpenState({
            navMenuOpen: !navMenuOpenState.navMenuOpen,
        });
    };
 */
    return (
        <div className="navbar bg-base-100 fixed top-0 left-0 w-full z-5 ">
            <div className="flex-1">{logo ? logo : <></>}</div>
            <div className="flex-none hidden md:flex navbar-end">
                <div className="md:dropdown ">
                    <ul className="hidden md:flex menu menu-horizontal p-0">
                        <li className="cursor-pointer hover:shadow-lg hover:shadow-gray-400">
                            <a>Homepage</a>
                        </li>
                        <li>
                            <a>Portfolio</a>
                        </li>
                        <li>
                            <a>About</a>
                        </li>
                    </ul>
                    <div tabIndex={0} role="button" className="inline-flex items-center md:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
