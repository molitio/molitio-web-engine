import React from 'react';
import Link from 'next/link';
import { useAtom } from 'jotai';
import NavMenu from './NavMenu';
import { NavRoot, navMenuAtomRW } from '../../context';
import '../styles/navbar.css';

export type NavBarProps = {
    logo?: React.ReactNode;
    headerText?: string;
};

/**
 * NavBar
 *
 * A wrapper for Nav to inject navRoot context as a provider
 */

const NavBar: React.FC<NavBarProps> = (props) => {
    const { headerText, logo } = props;
    return (
        <div className="navbar flex bg-primary fixed top-0 w-full z-5 ">
            {logo}
            {headerText}
            <NavMenu />
        </div>
    );
};

export default NavBar;
