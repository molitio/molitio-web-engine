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
        <nav className="navbar flex bg-base-100 fixed top-0 w-full z-5 ">        
                <NavMenu />        
        </nav>
    );
};

export default NavBar;
