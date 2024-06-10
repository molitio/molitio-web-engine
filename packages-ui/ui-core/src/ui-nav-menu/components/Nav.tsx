'use client';
import React from 'react';
import { NavBarProps } from './NavBar';
/* import NavMenu from './NavMenu'; */
import Link from 'next/link';
import { NavRoot } from '../types';
import { useAtom } from 'jotai';
import { navMenuAtomRW } from '../../context';



type NavProps = {
    logo?: React.ReactNode;

};
const Nav: React.FC<NavProps> = (props) => {


    const [navRoot] = useAtom(navMenuAtomRW);
    const { logo } = props;

    return (
        <nav className="navbar bg-base-100 fixed top-0 left-0 w-full z-5">
            <div className="flex-1 px-2 md:flex-none">
                <Link href={'/'}>{logo ? logo : <></>}</Link>
            </div>
            <div className="flex px-2 justify-end flex-1">
                {/* <NavMenu  navElementCollection={{ navElements: navMenuElements }}  /> */}
            </div>
        </nav>
    );
};

export default Nav;
