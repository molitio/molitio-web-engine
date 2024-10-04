import React from 'react';
import NavMenu from './NavMenu';

import '../styles/navbar.css';
import { UseClientComponent } from '../../core';

export type NavBarProps = {
    headerText?: string;
};

/**
 * NavBar
 *
 * A wrapper for Nav to inject navRoot context as a provider
 */

const NavBar: React.FC<NavBarProps> = (props) => {
    return (
        <UseClientComponent>
            <section className="navbar fixed top-0 w-full z-5 bg-gradient-45 from-blue-300 to-blue-400">
                <NavMenu />
            </section>
        </UseClientComponent>
    );
};

export default NavBar;
