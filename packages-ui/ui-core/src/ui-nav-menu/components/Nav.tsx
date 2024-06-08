'use client';
import React from 'react';
import { NavBarProps } from './NavBar';
import NavMenu from './NavMenu';
import { NavElementData } from '../types';
import Link from 'next/link';

const navMenuElements: Record<string, NavElementData> = {
    home: {
        text: 'Home',
        href: '/',
    },
    portfolio: {
        text: 'Portfolio',
        href: '/portfolio',
    },
    about: {
        text: 'About',
        href: '/about',
    },
};

const Nav: React.FC<NavBarProps> = (props) => {
    const { logo } = props;

    return (
        <nav className="navbar bg-base-100 fixed top-0 left-0 w-full z-5">
            <div className="flex-1 px-2 md:flex-none">
                <Link href={'/'}>{logo ? logo : <></>}</Link>
            </div>
            <div className="flex px-2 justify-end flex-1">
                <NavMenu navElementCollection={{ navElements: navMenuElements }} />
            </div>
        </nav>
    );
};

export default Nav;
