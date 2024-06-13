'use client';
import React from 'react';
import Link from 'next/link';
import NavMenu from './NavMenu';

type NavProps = {
    logo?: React.ReactNode;
};
const Nav: React.FC<NavProps> = (props) => {
    const { logo } = props;

    return (
        <nav className="navbar bg-base-100 fixed top-0 left-0 w-full z-5">
            <div className="flex-1 px-2 md:flex-none">
                <Link href={'/'}>{logo ? logo : <></>}</Link>
            </div>
            <div className="flex px-2 justify-end flex-1">
                <NavMenu />
            </div>
        </nav>
    );
};

export default Nav;
