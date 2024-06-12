'use client';
import React from 'react';
import { navMenuAtomRW, navMenuStore } from '../../context';
import Nav from './Nav';
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
    const { headerText, logo, appNavRoot = {} } = props;
    const [navMenuAtom, setNavMenuAtom] = useAtom(navMenuAtomRW);

    React.useEffect(() => {
        function effect() {
            setNavMenuAtom(appNavRoot);
        }

        effect();
    }, [navMenuAtom]);

    return (
        <div>
            {headerText}
            <Nav logo={logo} />
        </div>
    );
};

export default NavBar;
