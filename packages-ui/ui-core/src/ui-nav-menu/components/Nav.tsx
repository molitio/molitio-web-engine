'use client';

import React from 'react';
import { NavBarProps } from './NavBar';
//import '../style/navbar.css';
import { useAtom } from 'jotai';
import { navMenuAtom, navMenuAtomRW } from '../../context';

const Nav: React.FC<NavBarProps> = (props) => {
    const { logo } = props;
    const [navMenuOpenState, setNavMenuOpenState] = useAtom(navMenuAtomRW);

    const handleToggleMenu = () => {
        console.log('handleToggleMenu');
        setNavMenuOpenState({
            navMenuOpen: !navMenuOpenState.navMenuOpen,
        });
    };

    return (
        <nav className="navbar bg-base-100 fixed top-0 left-0 w-full z-5 ">
            <div className="flex-1">{logo ? logo : <></>}</div>
            <div
                onClick={handleToggleMenu}
                className={`flex-none md:flex navbar-end ${
                    navMenuOpenState.navMenuOpen ? 'bg-purple-500' : 'bg-red-500'
                }`}
            >
                <div className="md:dropdown">
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
        </nav>
    );
};

export default Nav;
