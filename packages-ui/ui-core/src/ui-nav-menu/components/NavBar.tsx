import React from 'react';
import Link from 'next/link';
import { useAtom } from 'jotai';
import NavMenu from './NavMenu';
import { NavRoot, navMenuAtomRW } from '../../context';


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
        <nav className="navbar bg-base-100 fixed top-0 left-0 w-full z-5">
            {headerText}
            <div className="flex-1 px-2 md:flex-none">{/* <a href={'/'}>{logo ? logo : <></>}</a> */}</div>
            <div className="flex px-2 justify-end ">
                <NavMenu />
            </div>
        </nav>
    );
};

export default NavBar;
