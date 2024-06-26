'use client';
import React from 'react';
import { navMenuAtomRW } from '../../context';
import Link from 'next/link';
import NavMenu from './NavMenu';

import { NavRoot } from '../types';
import { useAtom } from 'jotai';

export type NavBarProps = {
    logo?: React.ReactNode;
    appNavRoot?: NavRoot;
    headerText?: string;
};

/**
 * NavBar
 *
 * A wrapper for Nav to inject navRoot context as a provider
 */

const NavBar: React.FC<NavBarProps> = (props) => {
    const { headerText, logo, appNavRoot } = props;
    const [navMenuAtom, setNavMenuAtom] = useAtom(navMenuAtomRW);

    React.useEffect(() => {
        function effect() {}
        if (appNavRoot) {
            setNavMenuAtom(appNavRoot);
        }

        effect();
    }, [navMenuAtomRW, appNavRoot]);

    /*  React.useEffect(() => {}, [appNavRoot]); */

    return (
        <nav className="navbar bg-base-100 fixed top-0 left-0 w-full z-5">
            {headerText}
            <div className="flex-1 px-2 md:flex-none">
                <Link href={'/'}>{logo ? logo : <></>}</Link>
            </div>
            <div className="flex px-2 justify-end flex-1">
                <NavMenu />
            </div>
        </nav>
    );
};

export default NavBar;
